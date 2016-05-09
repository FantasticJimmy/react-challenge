import React from 'react';
import mui from 'material-ui'
import PlaceList from './PlaceList.jsx'
import MapView from './MapView.jsx'
import Firebase from 'firebase'
import Login from './Login.jsx'
import _ from 'lodash'
import Favorite from './Favorite.jsx'


var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;
var Toggle = mui.Toggle;
var IconButton = mui.IconButton
var NavigationClose = mui.NavigationClose
var IconMenu = mui.IconMenu
var MoreVertIcon = mui.MoreVertIcon
var MenuItem = mui.MenuItem

var styles={
    showMapView: {display: 'block',width: '700px', height: '700px'}
}

class App extends React.Component{
    constructor(){
        super();
        ThemeManager.setPalette({
            primary1Color: Colors.blue500,
            primary2Color: Colors.blue700,
            primary3Color: Colors.blue100,
            accent1Color: Colors.pink400,
        })
        this.state={showMapView: true}
  

        // this.state= {
        //     places: [
        //         {"lng":"-79.385865","lat":"43.642424","url":"http://www.ripleyaquariums.com/canada/","title":"Ripley's Aquarium","imgUrl":"/public/images/aquarium.jpg"},
        //         {"lng":"-79.387057","lat":"43.642566","url":"http://www.cntower.ca/en-ca/home.html","title":"CN Tower","imgUrl":"/public/images/cn tower.jpg"},
        //         {"lng":"-79.18589","lat":"43.817699","url":"http://www.torontozoo.com/","title":"Toronto Zoo","imgUrl":"/public/images/torontozoo.jpg"},
        //         {"lng":"-79.394777","lat":"43.66771","url":"http://www.rom.on.ca/en","title":"Royal Ontario Museum","imgUrl":"/public/images/rom.jpg"},
        //         {"lng":"-79.392512","lat":"43.653607","url":"http://www.ago.net/","title":"Art Gallery of Ontario","imgUrl":"/public/images/ago.jpg"},
        //         {"lng":"-79.453206","lat":" 43.725887","url":"http://yorkdale.com/","title":"Yorkdale Mall","imgUrl":"/public/images/yorkdale.jpg"},
        //         {"lng":"-79.381455","lat":"43.653597","url":"http://www.torontoeatoncentre.com/en/Pages/default.aspx","title":"Eaton Center","imgUrl":"/public/images/eaton.jpg"},
        //         {"lng":"-79.38409","lat":" 43.65344","url":"http://www.toronto.ca/","title":"City Hall","imgUrl":"/public/images/city hall.jpg"},
        //         {"lng":"-79.377264","lat":"43.646988","url":"http://www.hhof.com/","title":"Hockey Hall of Fame","imgUrl":"/public/images/Hockey Hall of Fame.jpg"},
        //         {"lng":"-79.379099","lat":"43.643466","url":"http://www.theaircanadacentre.com/","title":"Air Canada Center","imgUrl":"/public/images/acc.jpg"}]
        // };
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext(){
        return {muiTheme: ThemeManager.getCurrentTheme()}
    }
    onToggle(){
        this.setState({showMapView: !this.state.showMapView})
        if(this.state.showMapView){
            styles.showMapView.display="none";
        }
        else{
            styles.showMapView.display="block"
        }
    }
    _toggleNav(e){
        e.preventDefault()
        this.refs.leftNav.toggle()

    }
    render(){
        var that = this;
        return(
            <div>
              <AppBar
                title="Title"
                iconElementRight={
                  <IconMenu
                    iconButtonElement={
                      <IconButton></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                  </IconMenu>
                }
              />                
                <Login />
                <Toggle
                      defaultToggled={this.state.showMapView}
                      label="Map View"
                      labelPosition="right"
                      style={{marginTop: 20, marginLeft: '18%'}}
                      onToggle={this.onToggle.bind(this)}
                    />
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '30px auto 30px'
                }}>
                    <PlaceList />
                    <div style={styles.showMapView}>
                        <MapView />
                    </div>
                </div>
                <Favorite namee="fav"/>
            </div>
            )
    }
}

export default App;