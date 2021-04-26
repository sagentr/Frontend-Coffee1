import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{
  title = 'map';
  latitude = 38.6270;
  longitude = -90.1994;
  zoom: number;
  private geoCoder: google.maps.Geocoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;
    address: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: { formatted_address: any; }[], status: string) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }


  // array:
  // [
  //     {
  //         "featureType": "all",
  //         "elementType": "geometry.fill",
  //         "stylers": [
  //             {
  //                 "weight": "2.00"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "all",
  //         "elementType": "geometry.stroke",
  //         "stylers": [
  //             {
  //                 "color": "#9c9c9c"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "all",
  //         "elementType": "labels.text",
  //         "stylers": [
  //             {
  //                 "visibility": "on"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "landscape",
  //         "elementType": "all",
  //         "stylers": [
  //             {
  //                 "color": "#f2f2f2"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "landscape",
  //         "elementType": "geometry.fill",
  //         "stylers": [
  //             {
  //                 "color": "#ffffff"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "landscape.man_made",
  //         "elementType": "geometry.fill",
  //         "stylers": [
  //             {
  //                 "color": "#ffffff"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "poi",
  //         "elementType": "all",
  //         "stylers": [
  //             {
  //                 "visibility": "off"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "road",
  //         "elementType": "all",
  //         "stylers": [
  //             {
  //                 "saturation": -100
  //             },
  //             {
  //                 "lightness": 45
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "road",
  //         "elementType": "geometry.fill",
  //         "stylers": [
  //             {
  //                 "color": "#eeeeee"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "road",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //             {
  //                 "color": "#7b7b7b"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "road",
  //         "elementType": "labels.text.stroke",
  //         "stylers": [
  //             {
  //                 "color": "#ffffff"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "road.highway",
  //         "elementType": "all",
  //         "stylers": [
  //             {
  //                 "visibility": "simplified"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "road.arterial",
  //         "elementType": "labels.icon",
  //         "stylers": [
  //             {
  //                 "visibility": "off"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "transit",
  //         "elementType": "all",
  //         "stylers": [
  //             {
  //                 "visibility": "off"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "water",
  //         "elementType": "all",
  //         "stylers": [
  //             {
  //                 "color": "#46bcec"
  //             },
  //             {
  //                 "visibility": "on"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "water",
  //         "elementType": "geometry.fill",
  //         "stylers": [
  //             {
  //                 "color": "#c8d7d4"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "water",
  //         "elementType": "labels.text.fill",
  //         "stylers": [
  //             {
  //                 "color": "#070707"
  //             }
  //         ]
  //     },
  //     {
  //         "featureType": "water",
  //         "elementType": "labels.text.stroke",
  //         "stylers": [
  //             {
  //                 "color": "#ffffff"
  //             }
  //         ]
  //     }
  // ]

}
