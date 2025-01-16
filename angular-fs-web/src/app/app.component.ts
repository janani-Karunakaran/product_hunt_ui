import { Component} from '@angular/core';
import { ParentComponent } from './parent.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements AfterViewInit{
//   title = 'angular-fs-web';
//   messageFromChildPost:any='';
//   messageToChild:string="Message from parent to child";

//   @ViewChild(PostComponent) childComp:any;

//   ngAfterViewInit(){
//     console.log(this.childComp);
//     this.messageFromChildPost=this.childComp.messageToParent;
//   }
// }

@Component({
  selector: "app-root",
  template: `<app-home></app-home>`
})
export class AppComponent {
  title = "Product Application";
}

