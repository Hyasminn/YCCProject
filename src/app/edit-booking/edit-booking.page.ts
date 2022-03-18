import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from 'src/app/models/post.mode';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.page.html',
  styleUrls: ['./edit-booking.page.scss'],
})
export class EditBookingPage implements OnInit {
  post = {} as Post;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait..."
    });
    (await loader).present();

    this.firestore.doc("book-class/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.name = data["name"];
        this.post.email = data["email"];
        this.post.date = data["date"];
      });
    //dismiss loader
    (await loader).dismiss();
  }

  async updatePost(post: Post) {
    if (this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait..."
      });
      (await loader).present();

      try {

        await this.firestore.doc("book-class/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
      //redirect to appointment page
      this.navCtrl.navigateRoot("view-booking");
    }
  }

  formValidation() {
    
    if (!this.post.name) {
      this.showToast("Enter name");
      return false;
    }

    if (!this.post.email) {
      this.showToast("Enter email");
      return false;
    }

    if (!this.post.date) {
      this.showToast("Enter date");
      return false;
    }
   
    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());
  }
}
