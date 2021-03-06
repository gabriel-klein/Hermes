import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';

import { from, Observable } from 'rxjs';

export const RANKING_KEY = 'ranking';
export const PARTIDA_KEY = 'partida';
@Injectable({
  providedIn: 'root',
})
export class Store {
  constructor(private fireStore: AngularFirestore) {}

  /**
   * Retorna um observável de uma lista
   * @param key Chave da lista
   */
  getList<T>(key: string, query: (ref: CollectionReference) => Query = null): Observable<T[]> {
    return this.fireStore.collection<T>(key).valueChanges();
  }

  /**
   * Retorna um Observável de um Documento
   * @param key Chave da lista
   * @param id Chave do Documento
   */
  get<T>(key: string, id: string): Observable<T> {
    return this.fireStore.doc<T>(`${key}/${id}`).valueChanges();
  }

  /**
   * Insere / Sobrescreve um Documento
   * @param key Chave da lista
   * @param id Chave do Documento
   * @param data Documento a ser Inserido / Atualizado
   */
  set<T>(key: string, id: string, data: T): Observable<void> {
    return from(this.fireStore.doc<T>(`${key}/${id}`).set(data));
  }

  /**
   * Atualiza alguns campos de um Documento
   * @param key Chave da lista
   * @param id Chave do Documento
   * @param data Documento a ser atualizado
   */
  update<T>(key: string, id: string, data: Partial<T>): Observable<void> {
    return from(this.fireStore.doc<T>(`${key}/${id}`).update(data));
  }

  /**
   * Deleta um Documento
   * @param key Chave da lista
   * @param id Chave do Documento
   */
  delete<T>(key: string, id: string): Observable<void> {
    return from(this.fireStore.doc<T>(`${key}/${id}`).delete());
  }

  /**
   * Gera um Id
   */
  createId(): string {
    return this.fireStore.createId();
  }
}
