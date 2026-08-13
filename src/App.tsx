import {
  Refine,
  GitHubBanner,
  WelcomePage,
  Authenticated,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import routerProvider, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";

// import { Login } from "./pages/login";
// import { Register } from "./pages/register";
// import { ForgotPassword } from "./pages/forgot-password";
import { ErrorComponent } from "./components/refine-ui/layout/error-component";
import { Layout } from "./components/refine-ui/layout/layout";
import { Header } from "./components/refine-ui/layout/header";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import "./App.css";
import Dashboard from "@/pages/dashboard.tsx";
import {BookOpen, Home, GraduationCap} from "lucide-react";
import SubjectsList from "@/pages/subjects/list.tsx";
import SubjectsCreate from "@/pages/subjects/Create.tsx";
import {dataProvider} from "@/providers/data.ts";
import Classlist  from "@/pages/classes/list.tsx";
import Classcreate from "@/pages/classes/create.tsx";


function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "uGDbiB-hiOEaH-bs9DKw",
              }}
              resources={[
                {
                  name: 'dashboard',
                  list: '/',
                  meta: {label:'Home', icon:<Home />}
                },{
                  name: 'subjects',
                  list: '/subjects',
                  create: '/subjects/create',
                  meta: {label: 'Subjects', icon: <BookOpen />}

                },
                {
                name: 'classes',
                list: '/classes',
                create: '/classes/create',
                meta: {label: 'Classes', icon: <GraduationCap />}

              },
              ]}
            >
              <Routes>
                <Route element={
                  <Layout>
                    <Outlet />
                  </Layout>
                } >
                  <Route path='/' element={<Dashboard/>}/>

                  <Route path="subjects" >
                    <Route index element={<SubjectsList />}/>
                    <Route path="create" element={<SubjectsCreate />} ></Route>
                  </Route>

                  <Route path="classes">
                    <Route index element={<Classlist/>} />
                    <Route path="create" element={<Classcreate/>} />
                  </Route>

                </Route>



              </Routes>
              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
