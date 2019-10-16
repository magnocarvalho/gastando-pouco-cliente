import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import * as firebase from "firebase/app";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public user: Observable<firebase.User>;
  private token: String = null;
  public firebaseUser: User = {
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
  };
  constructor(private http: HttpClient, public rotas: Router, public loadingBar: LoadingBarService, private storage: AngularFireStorage, public afAuth: AngularFireAuth, private toastr: ToastrService) {

    afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    this.user = afAuth.authState;
    this.user.subscribe(user => {
      try {
        if (user) {
          this.firebaseUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          };
          user.getIdToken(true).then(res => {
            this.token = res
            localStorage.setItem('token', res)
            this.loadingBar.complete()

          }).catch(e => {
            this.loadingBar.complete()
          })
        }
      } catch (error) {
        this.afAuth.auth.signOut();
      }
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => { })
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);

        },
        err => {
          console.log(err);

          reject(err);
        }
      );
    });
  }
}
