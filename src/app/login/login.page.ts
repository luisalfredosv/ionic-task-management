import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AlertController, IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = this.form.group({
    username: new FormControl('lsarabia', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('12795Lasv', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private form: FormBuilder, 
    private apiServ: ApiService,
    public toasterController: ToastController,
    public alertCtrl:AlertController,
    ) {}

  ngOnInit() {}

  accessToken: string ='';

  async validateFormLogin() {
    const { username, password } = this.usuario.value;
    return this.apiServ.createItem({
      username,
      password
    }).subscribe(async ({accessToken}) => {
      this.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken)

      const toast = await this.toasterController.create({
        header: 'Notification',
        message: 'Successful authentication',
        position: 'bottom',
        duration: 2000,
        animated: true,
        color: 'primary'
      }); 
  
      toast.present();
      
    });
    
  }
}

