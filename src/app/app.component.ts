import { Component, OnInit } from '@angular/core';
declare var OpenSeadragon: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  duomo = {
    Image: {
      xmlns: "http://schemas.microsoft.com/deepzoom/2008",
      Url: "//openseadragon.github.io/example-images/duomo/duomo_files/",
      Format: "jpg",
      Overlap: "2",
      TileSize: "256",
      Size: {
        Width:  "13920",
        Height: "10200"
      }
    }
  };

  title = 'seaDragonIntegration';
  viewer: any;

  ngOnInit(){
    this.viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "//openseadragon.github.io/openseadragon/images/",
      tileSources: this.duomo
    });
  }


}
