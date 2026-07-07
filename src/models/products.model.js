import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import db from '../config/firebase.js';

const productsCollection = collection(db, 'products');

export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map((product) => ({ id: product.id, ...product.data() }));
};

export const getProductById = async (id) => {
  const productRef = doc(db, 'products', id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return { id: snapshot.id, ...snapshot.data() };
};

export const createProduct = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
};

export const updateProduct = async (id, product) => {
  const productRef = doc(db, 'products', id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  await updateDoc(productRef, product);
  return { id, ...snapshot.data(), ...product };
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, 'products', id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return false;
  }

  await deleteDoc(productRef);
  return true;
};
