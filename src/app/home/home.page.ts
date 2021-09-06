import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  userName: any;
  user={
    name: "",
    lastName: "",
    edLevel: "",
    birthDate: ""
  };

  constructor(public toastController: ToastController, private activatedRoute: ActivatedRoute, private router: Router) {

  this.activatedRoute.queryParams.subscribe(params => {
    if(this.router.getCurrentNavigation().extras.state){
      this.userName = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.userName);
    }
  });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  show(){
    this.showData("Su nombre es: " + this.user.name + " " + this.user.lastName);
  }

  async showData(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  clean(){
    this.user.name = "";
    this.user.lastName = "";
    this.user.edLevel = "";
    this.user.birthDate = "";
  }
}