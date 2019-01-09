import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {

  currMap: string;
  mobile: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform
    ) {

    if(this.platform.is('core')) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }

    this.currMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26488.35765778549!2d-98.63686088087091!3d33.914248920656696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8653230c575792db%3A0xee0c07ad6cdbb4c4!2sHaws+Road+Community+Church!5e0!3m2!1sen!2sus!4v1542121082574";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }

  dirCityHall() {
    this.currMap = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26481.113784329853!2d-98.67031149204925!3d33.93754713436215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x86533b4efb0a57cf%3A0x5a08dfa9b709cc3a!2sIowa+Park+City+Hall%2C+North+Wall+Street%2C+Iowa+Park%2C+TX!3m2!1d33.9513563!2d-98.6675576!4m5!1s0x8653230c575792db%3A0xee0c07ad6cdbb4c4!2sHaws+Road+Community+Church%2C+2635+Haws+Rd%2C+Iowa+Park%2C+TX+76367!3m2!1d33.9145604!2d-98.62363219999999!5e0!3m2!1sen!2sus!4v1542128247273";
  }

  dirHighSchool() {
    this.currMap = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26480.313666770715!2d-98.67628987625902!3d33.94011966072796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x86533b0e00672547%3A0x6bb9ca5bd2bdff09!2sIowa+Park+High+School%2C+Bob+Dawson+Dr%2C+Iowa+Park%2C+TX!3m2!1d33.9640353!2d-98.69392839999999!4m5!1s0x8653230c575792db%3A0xee0c07ad6cdbb4c4!2sHaws+Road+Community+Church%2C+2635+Haws+Rd%2C+Iowa+Park%2C+TX+76367!3m2!1d33.9145604!2d-98.62363219999999!5e0!3m2!1sen!2sus!4v1542128356593";
  }

  dirBradford() {
    this.currMap = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d13241.961482128003!2d-98.65213300917854!3d33.9285137402351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x86533b538078d40b%3A0x53dc037d10899bf8!2sBradford+Elementary+School%2C+Texowa+Road%2C+Iowa+Park%2C+TX!3m2!1d33.942467!2d-98.66308099999999!4m5!1s0x8653230c575792db%3A0xee0c07ad6cdbb4c4!2sHaws+Road+Community+Church%2C+2635+Haws+Rd%2C+Iowa+Park%2C+TX+76367!3m2!1d33.9145604!2d-98.62363219999999!5e0!3m2!1sen!2sus!4v1542128469277";
  }

  dirCancel() {
    this.currMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26488.35765778549!2d-98.63686088087091!3d33.914248920656696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8653230c575792db%3A0xee0c07ad6cdbb4c4!2sHaws+Road+Community+Church!5e0!3m2!1sen!2sus!4v1542121082574";
  }

}
