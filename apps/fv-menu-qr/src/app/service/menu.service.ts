import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Menu } from '@fv-playing-qr/data';

@Injectable()
export class MenuService {

  private dbPath = '/passaKafe';

  MenusRef: AngularFirestoreCollection<Menu>;

  constructor(private db: AngularFirestore) {
    this.MenusRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Menu> {
    return this.MenusRef;
  }

  create(Menu: Menu): any {
    return this.MenusRef.add({ ...Menu });
  }

  update(id: string, data: any): Promise<void> {
    return this.MenusRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.MenusRef.doc(id).delete();
  }
}
