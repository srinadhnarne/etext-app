import './App.css'
import { DarkModeProvider } from "./context/useTheme";
import { ColorProvider } from "./context/colorTheme";
import { Outlet, Route, Routes } from "react-router-dom";
import { CurrentPageProvider } from "./context/useCurrentPage";
import { DropdownProvider } from "./context/useDropdown";
import { ChatWallpaperProvider } from "./context/useChatWallpaper";
import HomeScreen from './pages/HomeScreen';
import ChatScreen from './pages/ChatScreen';


function App() {
  return (
      <DarkModeProvider>
        <ColorProvider>
          <ChatWallpaperProvider>
              <CurrentPageProvider>
                <DropdownProvider>
                  <Routes>
                    <Route path='/' element={<HomeScreen/>}>
                      <Route path='/groups' element={<Outlet/>}/>
                      <Route path='/calls' element={<Outlet/>}/>
                      <Route path='/settings' element={<Outlet/>}/>
                    </Route>
                    {/* </Route> */}
                    <Route path='/chat' element={<ChatScreen/>}/>
                  </Routes>
                </DropdownProvider>
              </CurrentPageProvider>
          </ChatWallpaperProvider>
        </ColorProvider>
      </DarkModeProvider>
  );
}

export default App;