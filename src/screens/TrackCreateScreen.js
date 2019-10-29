import '../_mockLocation';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import MapT from '../components/MapT';
import {SafeAreaView,withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import useLocation from '../hooks/useLocation';
import {Context as LocationContext} from '../context/LocationContext';

const TrackCreateScreen = ({isFocused})=>{
    const {addLocation} =  useContext(LocationContext);
    const [err] = useLocation(isFocused,addLocation);
    return( 
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>Create a Track</Text>
            <MapT/>
            {err? <Text>Please enable location services</Text>:null}
        </SafeAreaView>        
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);