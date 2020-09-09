import { AngularFireDatabase } from '@angular/fire/database';

import { from, Observable } from 'rxjs';

export class RealTimeDB {
  constructor(private fireDatabase: AngularFireDatabase) {}

  /**
   * Retorna um observável da lista especificada
   * @param key Chave da lista
   */
  getList<T>(key: string): Observable<T[]> {
    return this.fireDatabase.list<T>(key).valueChanges();
  }

  /**
   * Retorna um observável do objeto especificado
   * @param key Chave da lista
   * @param id Chave do Objeto
   */
  get<T>(key: string, id: string): Observable<T> {
    return this.fireDatabase.object<T>(`${key}/${id}`).valueChanges();
  }

  /**
   * Insere / Sobreescreve um Objeto
   * @param key Chave da lista
   * @param id Chave do Objeto
   * @param data Objeto a ser inserido / atualizado
   */
  set<T>(key: string, id: string, data: T): Observable<void> {
    return from(this.fireDatabase.object<T>(`${key}/${id}`).set(data));
  }

  /**
   * Atualiza alguns campos de um Objeto
   * @param key Chave da lista
   * @param id Chave do Objeto
   * @param data Parte do Objeto a ser inserido / atualizado
   */
  update<T>(key: string, id: string, data: Partial<T>): Observable<void> {
    return from(this.fireDatabase.object<T>(`${key}/${id}`).update(data));
  }

  /**
   * Insere um novo Objeto na lista
   * @param key Chave da Lista
   * @param data Objeto
   */
  push<T>(key: string, data: T): Observable<any> {
    return from(this.fireDatabase.list<T>(key).push(data));
  }

  /**
   * Remove o elemento especificado da lista
   * @param key Chave da lista
   * @param id Chave do Objeto
   */
  remove<T>(key: string, id: string): Observable<void> {
    return from(this.fireDatabase.object<T>(`${key}/${id}`).remove());
  }

  /**
   * Remove toda a lista
   * @param key Chave da lista
   */
  removeList<T>(key: string): Observable<void> {
    return from(this.fireDatabase.list<T>(key).remove());
  }

  /**
   * Gera um Id
   */
  createId(): string {
    return this.fireDatabase.createPushId();
  }
}
