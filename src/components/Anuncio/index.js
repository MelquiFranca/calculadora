import React from 'react';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';
  
export default async function Anuncio() {
    
  // Set global test device ID
//   await setTestDeviceIDAsync('EMULATOR');
  

  
  // Display an interstitial
  await AdMobInterstitial.setAdUnitID('ca-app-pub-2855368523447036~3684952469'); // Test ID, Replace with your-admob-unit-id
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
  await AdMobInterstitial.showAdAsync();
  
  // Display a rewarded ad
  await AdMobRewarded.setAdUnitID('ca-app-pub-2855368523447036~3684952469'); // Test ID, Replace with your-admob-unit-id
  await AdMobRewarded.requestAdAsync();
  await AdMobRewarded.showAdAsync();
    return (<>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-2855368523447036~3684952469" // Test ID, Replace with your-admob-unit-id
                // servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={this.bannerError} />            
            <PublisherBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-2855368523447036~3684952469" // Test ID, Replace with your-admob-unit-id
                onDidFailToReceiveAdWithError={this.bannerError}
                onAdMobDispatchAppEvent={this.adMobEvent} />
    </>);
}