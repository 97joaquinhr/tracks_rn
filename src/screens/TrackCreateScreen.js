import '../_mockLocation';
import React, {useContext,useCallback} from 'react';
import {StyleSheet} from 'react-native';
import MapT from '../components/MapT';
import {SafeAreaView,withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import useLocation from '../hooks/useLocation';
import {Context as LocationContext} from '../context/LocationContext';
import TrackForm from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused})=>{
    const {state:{recording}, addLocation} =  useContext(LocationContext);
    const callback = useCallback(
        location=>{
            addLocation(location,recording);
        },
        [recording]
    );
    const [err] = useLocation(isFocused||recording,callback);
    
    return( 
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>Create a Track</Text>
            <MapT/>
            {err? <Text>Please enable location services</Text>:null}
            <TrackForm/>
        </SafeAreaView>        
    );
};

TrackCreateScreen.navigationOptions ={
    title: 'Add track',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);