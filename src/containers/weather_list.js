import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines} from 'react-sparklines';


class WeatherList extends Component
{
    renderWeather(cityData){
        console.log(cityData);
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        return(
            <tr key={cityData.city.name}>
            <td>{cityData.city.name}</td>
            <td>{cityData.list[0].main.temp}<sup>K</sup></td>
            <td>{cityData.list[0].main.pressure}<sup>mm</sup></td>
            <td>{cityData.list[0].main.humidity}<sup>cc</sup></td>
            <td>
                <Sparklines data={temps}>
                </Sparklines>
            </td>
            </tr>
        );
    }
    render(){
        console.log(this.props.weather);
        return(
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>

        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
