/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from '../features/users/UserSlice'

// Configure persist
const persistConfig = {
    key: 'root', // key for the root reducer
    storage, // storage mechanism
  };

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);  

const store = configureStore({
  reducer: {
    user: persistedReducer
  },
})

// Export the persistor
const persistor = persistStore(store);

export { store, persistor };


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import userReducer from '../features/users/UserSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// const store = configureStore({
//   reducer: {
//     user: persistedReducer,
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// const persistor = persistStore(store);

// export { store, persistor };
