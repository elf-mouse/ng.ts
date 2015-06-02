import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
  selector: 'display',
  injectables: [FriendsService]
})

@View({
  template: `
    <p>My name: {{ myName }}</p>
    <p>Friends:</p>
    <ul>
      <li *for="#name of names">
        {{ name }}
      </li>
    </ul>
    <p *if="names.length > 3">You have many friends!</p>
  `,
  directives: [For, If]
})

class DisplayComponent {
  myName: string;
  todos: Array<string>;
  constructor(friendsService: FriendsService) {
    this.myName = 'Alice';
    //this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    this.names = friendsService.names;
  }
}

class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Aarav", "Martín", "Shannon"];
  }
}

bootstrap(DisplayComponent);
