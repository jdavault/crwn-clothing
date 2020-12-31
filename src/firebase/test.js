import firebase from 'firebase/app'
import 'firebase/firestore'
import { firstore } from './firebase.utils';


const firestore = firebase.firestore();
//lether jact for user joe
firestore.collection('users').doc('ZCEwKfwloegM7aLRrI4R').collection('cartItems').doc('hvfm3Z7tWsHmMSr1XUEp');

//Or ...
firstore.doc('/users/ZCEwKfwloegM7aLRrI4R/cartItems/hvfm3Z7tWsHmMSr1XUEp')

//cartItems
firstore.collection('/users/ZCEwKfwloegM7aLRrI4R/cartItems')
