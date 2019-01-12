import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()

export class DataService {


  constructor(private http: HttpClient) {}


  getUsers() {
    return this.http.get('http://localhost:6400/user/all');
  }
  storeUser(user) {
    return this.http.post('http://localhost:6400/user/', user );
  }
  deleteUser(id) {
    return this.http.delete('http://localhost:6400/user/' + id );
  }
  editUser(id, user) {
    return this.http.post('http://localhost:6400/user/update/' + id, user);
  }
  getMachines() {
    return this.http.get('http://localhost:8400/machine/all');
  }
  storeMachine(machine) {
    return this.http.post('http://localhost:8400/machine', machine);
  }
  deleteMachine(id) {
    return this.http.delete('http://localhost:8400/machine/' + id);
  }
  editMachine(machine) {
    return this.http.post('http://localhost:8400/machine/update', machine);
  }
  getProducts() {
    return this.http.get('http://localhost:8400/product');
  }
  storeProduct(product) {
    return this.http.post('http://localhost:8400/product', product );
  }
  deleteProduct(id) {
    return this.http.delete('http://localhost:8400/product/' + id );
  }
  editProduct(id, product) {
    return this.http.put('http://localhost:8400/product/update/' + id, product );
  }
  getCurRecords() {
    return this.http.get('http://localhost:7500/record/current/all');
  }
  getArcRecords() {
    return this.http.get('http://localhost:7500/record/archive/all');
  }
  getCurMtRecords() {
    return this.http.get('http://localhost:7500/record/current/maintenance');
  }
  getCurMfRecords() {
    return this.http.get('http://localhost:7500/record/current/malfunction');
  }
  getArcMtRecords() {
    return this.http.get('http://localhost:7500/record/archive/maintenance');
  }
  getArcMfRecords() {
    return this.http.get('http://localhost:7500/record/archive/maintenance');
  }
  completeRecord(machineId) {
    return this.http.post('http://localhost:7500/record/complete', machineId)
  }
  getMachineState(id) {
    return this.http.get('http://localhost:8400/machine/state/' + id);
  }
  getProdIncByPer(productName, options) {
    return this.http.get('http://localhost:6500/stat/product/income/' + productName, options);
  }
  soldProdByPer(productName, options) {
    return this.http.get( 'http://localhost:6500/stat/product/sell/' + productName, options);
  }
  profitlessProdByPer(options) {
    return this.http.get( 'http://localhost:6500/stat/product/profit_less/by_period/' + options);
  }
  mostProfProdByPer(options) {
    return this.http.get( 'http://localhost:6500/stat/product/profit_most/by_period/' + options);
  }

}
