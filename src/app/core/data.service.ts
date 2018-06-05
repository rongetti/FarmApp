import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb/dist/pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

import { HERD_STATIC_DATA, GROUPS_OF_ANIMALS } from '../const/herd';

@Injectable()
export class DataService {

  private dbHerd: PouchDB;
  private dbGroups: PouchDB;

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    this.initHerd().then(() => {
      this.initGroups();
    }).then(() => {
      console.log('gg');
    });
  }

  private initHerd() {
    this.dbHerd = new PouchDB('dbHerd');
    return this.dbHerd.info().then(info => {
      if (info.doc_count === 0) {
        let data = [];
        for (let animal of HERD_STATIC_DATA) {
          animal['_id'] = animal['tag'];
          data.push(animal);
        }
        return this.dbHerd.bulkDocs(data);
      }
    }).then(() => {
      return this.dbHerd.createIndex({
        index: {fields: ['tag', 'purpose', 'category', 'breed', 'calved', 'inCalf', 'served', 'boughtIn', 'bornOnFarm', 'movedOut', 'dob']}
      });
    });
  }

  private initGroups() {
    this.dbGroups = new PouchDB('dbGroups');
    return this.dbGroups.info().then(info => {
      if (info.doc_count === 0) {
        let data = [];
        for (let group of GROUPS_OF_ANIMALS) {
          group['_id'] = group['name'].toLowerCase().replace(/ /g, '');
          data.push(group);
        }
        return this.dbGroups.bulkDocs(data);
      }
    });

  }

  public getAnimals(filterBy?, filter?, sort?) {
    let selector = {};
    if (filterBy) {
      selector[filterBy] = filter;
    }
    return this.dbHerd.find({
      selector: selector,
      sort: sort
    });
  }

  public getAnimalByTag(tag) {
    return this.dbHerd.get(tag);
  }

  public addAnimals(animals) {
    for (let animal of animals) {
      animal['_id'] = animal['tag'];
    }
    return this.dbHerd.bulkDocs(animals);
  }

  public updateAnimal(animal) {
    return this.dbHerd.put(animal);
  }

  public deleteAnimal(animal) {
    return this.dbHerd.get(animal).then(doc => this.dbHerd.remove(doc));
  }

}
