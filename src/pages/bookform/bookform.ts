import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@IonicPage()
@Component({
    selector: 'page-bookform',
    templateUrl: 'bookform.html',
})
export class BookformPage {
    book: any = {
        judul: '',
        penerbit: '',
        pengarang: ''
    }
    title = '';
    header:any = {};
    bookID = '';
    toaster: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
                public http: HTTP, public toastCtrl: ToastController) {
        this.title = 'Tambah Buku';
        this.bookID = navParams.get("bookID");
        if (this.bookID != null || this.bookID != undefined) {
            this.title = 'Edit Buku';
        }
        this.toaster = this.toastCtrl.create({
            duration: 3000,
            position: 'bottom'
        });
    }

    ionViewDidLoad() {
        if (this.bookID != '') {
            this.http.get('http://localhost:8888/ionic_web_server/detail_buku.php', {id: this.bookID}, this.header)
            .then((res) => {
                try {
                    this.book = JSON.parse(res.data)[0];
                } catch(e) {
                    console.error('JSON parsing error');
                }     
            }).catch(e => {
                console.log(e);
            });
        }
    }

    save() {
        if (this.book.judul == '' || this.book.penerbit == '' || this.book.pengarang == '') {
            this.toaster.setMessage('All fields are required');
            this.toaster.present();
        } else {
            var url = 'http://localhost:8888/ionic_web_server/tambah_buku.php';
            if (this.bookID) {
                url = 'http://localhost:8888/ionic_web_server/edit_buku.php'
            }

            this.http.post(url, this.book, this.header)
            .then((res) => {
                try {
                    console.log(res);
                    var data = JSON.parse(res.data)
                    this.toaster.setMessage(data.message);
                    this.toaster.present();
                } catch(e) {
                    console.error('JSON parsing error');
                }     
                setTimeout(()=>{
                    this.navCtrl.pop();
                }, 300)
            }).catch(e => {
                console.log(e);
            });
        }
    }

    deleteBook() {
        var url = 'http://localhost:8888/ionic_web_server/delete_buku.php';
        this.http.post(url, {id: this.bookID}, this.header)
        .then((res) => {
            try {
                console.log(res);
                var data = JSON.parse(res.data)
                this.toaster.setMessage(data.message);
                this.toaster.present();
            } catch(e) {
                console.error('JSON parsing error');
            }     
            setTimeout(()=>{
                this.navCtrl.pop();
            }, 300)
        }).catch(e => {
            console.log(e);
        });
    }
}
