// import React, { useContext } from 'react';

// import { AppContext } from './State';
// import { AppContextProvider, AppContextConsumer } from './State';

// import { ScreenOrientation } from '@ionic-native/screen-orientation';

// const App: React.FunctionComponent = () => {

//     const { state, dispatch }: any = useContext(AppContext);

//     return (
//         <AppContextProvider>
//             <IonApp>
//                 <AppContextConsumer>
//                     {
//                         // login modal
//                         (value: any): any => {
//                             return (
//                                 <LoginModal showLoginModal={value.state.showLoginModal} afterAuthAction={value.state.afterAuthAction} />
//                             )
//                         }
//                     }
//                 </AppContextConsumer>
//                 <AppContextConsumer>
//                     {
//                         // register modal
//                         (value: any): any => {
//                             return (
//                                 <RegisterModal showRegisterModal={value.state.showRegisterModal} afterAuthAction={value.state.afterAuthAction} />
//                             )
//                         }
//                     }
//                 </AppContextConsumer>
//             </IonApp>
//         </AppContextProvider>
//     );
// };

// export default App;