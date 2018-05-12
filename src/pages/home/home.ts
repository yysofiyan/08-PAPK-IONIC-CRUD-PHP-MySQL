import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	data:any=[];
	header:any = {};

    constructor(public navCtrl: NavController, public http: HTTP, public zone: NgZone) {

    }

    ionViewDidEnter() {  
    	// Jika diperlukan untuk mendapatkan authentication header
        // this.header = this.http.getBasicAuthHeader(username, password);
        this.header['Cache-Control'] = 'no-cache';
        this.http.clearCookies();
        this.http.get('http://localhost:8888/ionic_web_server/semua_buku.php', {}, this.header)
        .then(res => {
            this.zone.run(() => {
            	this.data = JSON.parse(res.data);
            });
        }).catch(e => {
            console.log(e);
        });
    }

    edit(id) {
         this.navCtrl.push("BookformPage", {bookID: id})
    }

    add() {
        this.navCtrl.push("BookformPage")
    }

}
