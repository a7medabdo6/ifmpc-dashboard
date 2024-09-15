import React, { Fragment,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
import Auth from "./Authentication/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import AddEditcategories from "./components/Pages/Categories/AddEdit";
import UploadImage from "./components/Pages/UploadImgae";


import Categories from "./components/Pages/Categories";
import AddContacts from "./components/Pages/Contacts/Add";
import AddQuestions from "./components/Pages/Questions/Add";


import Tages from "./components/Pages/Tags";
import AddTags from "./components/Pages/Tags/Add";
import Projects from "./components/Pages/Projects";
import AddProjects from "./components/Pages/Projects/Add";
import ProtectedRoute from "./ProtectedRoute";
import AuthRedirect from "./AuthRedirect"; // Import AuthRedirect
import Authors from "./components/Pages/Authors";
import AddAuthors from "./components/Pages/Authors/Add";
import Publications from "./components/Pages/Publications";
import AddPublications from "./components/Pages/Publications/Add";
import OurPartners from "./components/Pages/OurPartners";
import AddOurPartners from "./components/Pages/OurPartners/Add";
import AddLinks from "./components/Pages/Linkes/Add";
import Links from "./components/Pages/Linkes";
import ContactUs from "./components/Pages/ContactUs";
import AddContactUs from "./components/Pages/ContactUs/Add";
import Users from "./components/Pages/Users";
import Images from "./components/Pages/Images";
import AddImages from "./components/Pages/Images/Add";
import EditProjects from "./components/Pages/Projects/Edit";
import EditPublications from "./components/Pages/Publications/Edit";
import Sliders from "./components/Pages/Slider";

// Dashboard
const Landingpageapp = React.lazy(() => import("./components/Landingpageapp"));
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const App = React.lazy(() => import("./components/app"));
// AdvanceUi
const Themepage = React.lazy(() => import("./components/Themepage"));
const Calendar = React.lazy(() =>
  import("./components/AdvanceUI/Calendar/Calendar")
);
const Cards = React.lazy(() => import("./components/AdvanceUI/Cards/Cards"));
const Chat = React.lazy(() => import("./components/AdvanceUI/Chat/Chat"));
// const Contacts = React.lazy(() =>
//   import("./components/AdvanceUI/Contacts/Contacts")
// );
const Contacts = React.lazy(() => import("./components/Pages/Contacts"));

const Questions = React.lazy(() => import("./components/Pages/Questions"));

const Trainings = React.lazy(() => import("./components/Pages/Training"));
const AddTraining = React.lazy(() => import("./components/Pages/Training/Add"));

const Carousels = React.lazy(() =>
  import("./components/AdvanceUI/Carousels/Carousels")
);
const Collapse = React.lazy(() =>
  import("./components/AdvanceUI/Collapse/Collapse")
);
const Modals = React.lazy(() => import("./components/AdvanceUI/Modals/Modals"));
const Notifications = React.lazy(() =>
  import("./components/AdvanceUI/Notifications/Notifications")
);
const Rating = React.lazy(() => import("./components/AdvanceUI/Rating/Rating"));
const Search = React.lazy(() => import("./components/AdvanceUI/Search/Search"));
const Sweetalert = React.lazy(() =>
  import("./components/AdvanceUI/Sweetalert/Sweetalert")
);
const Timeline = React.lazy(() =>
  import("./components/AdvanceUI/Timeline/Timeline")
);
const Treeview = React.lazy(() =>
  import("./components/AdvanceUI/Treeview/Treeview")
);
const UserList = React.lazy(() =>
  import("./components/AdvanceUI/UserList/UserList")
);
// Apps
const Widgets = React.lazy(() => import("./components/Apps/Widgets/Widgets"));
const Filedetails = React.lazy(() =>
  import("./components/Apps/File/Filedetails/Filedetails")
);
const FileManagerlist = React.lazy(() =>
  import("./components/Apps/File/FileManagerlist/FileManagerlist")
);
const FileManager = React.lazy(() =>
  import("./components/Apps/File/FileManager/FileManager")
);
const FileAttachements = React.lazy(() =>
  import("./components/Apps/File/FileAttachements/FileAttachements")
);
const Mailinbox = React.lazy(() =>
  import("./components/Apps/Mail/Mailinbox/Mailinbox")
);
const ViewMail = React.lazy(() =>
  import("./components/Apps/Mail/ViewMail/ViewMail")
);
const Mailcomposed = React.lazy(() =>
  import("./components/Apps/Mail/Mailcomposed/Mailcomposed")
);
const Leafletmaps = React.lazy(() =>
  import("./components/Apps/Maps/Leafletmaps/Leafletmaps")
);
const Blog = React.lazy(() => import("./components/Apps/Blog/Blog/Blog"));
const Blogdetails = React.lazy(() =>
  import("./components/Apps/Blog/Blogdetails/Blogdetails")
);
const Blogpost = React.lazy(() =>
  import("./components/Apps/Blog/Blogpost/Blogpost")
);
const Rsmmaps = React.lazy(() =>
  import("./components/Apps/Maps/Rsmmaps/Rsmmaps")
);
const Reactbasicables = React.lazy(() =>
  import("./components/Apps/Tables/Reactbasictables/Reacrbasictables")
);
const Reactdatatables = React.lazy(() =>
  import("./components/Apps/Tables/Reactdatatables/Reactdatatables")
);
// Charts
const ChartJs = React.lazy(() => import("./components/Charts/ChartJs/ChartJs"));
const Echart = React.lazy(() => import("./components/Charts/Echart/Echart"));
const Nvd3Charts = React.lazy(() =>
  import("./components/Charts/Nvd3Charts/nvd3charts")
);
const Piacharts = React.lazy(() =>
  import("./components/Charts/Piacharts/Piacharts")
);
const C3barcharts = React.lazy(() =>
  import("./components/Charts/C3barcharts/c3barcharts")
);
//Cryptocurrencies
const Buysell = React.lazy(() =>
  import("./components/Cryptocurrencies/Buysell/Buysell")
);
const MarketCap = React.lazy(() =>
  import("./components/Cryptocurrencies/MarketCap/MarketCap")
);
const Transcations = React.lazy(() =>
  import("./components/Cryptocurrencies/Transcations/Transcations")
);
const Wallet = React.lazy(() =>
  import("./components/Cryptocurrencies/Wallet/Wallet")
);
// E-commerce
const Account = React.lazy(() =>
  import("./components/ECommerce/Account/Account")
);
const ECCart = React.lazy(() => import("./components/ECommerce/ECCart/ECCart"));
const Checkout = React.lazy(() =>
  import("./components/ECommerce/Checkout/Checkout")
);
const ECDashboard = React.lazy(() =>
  import("./components/ECommerce/ECDashboard/ECDashboard")
);
const Order = React.lazy(() => import("./components/ECommerce/Orders/Orders"));
const Productdeatils = React.lazy(() =>
  import("./components/ECommerce/Productdeatils/Productdeatils")
);
const Products = React.lazy(() =>
  import("./components/ECommerce/Products/Products")
);
const Wishlist = React.lazy(() =>
  import("./components/ECommerce/Wishlist/Wishlist")
);
// Elements
const Alerts = React.lazy(() => import("./components/Elements/Alerts/Alerts"));
const Avatars = React.lazy(() =>
  import("./components/Elements/Avatars/Avatars")
);
const LazyAccordions = React.lazy(() =>
  import("./components/Elements/Accordions/Accordions")
);
const Badges = React.lazy(() => import("./components/Elements/Badges/Badges"));
const Breadcrumbs = React.lazy(() =>
  import("./components/Elements/Breadcrumbs/Breadcrumbs")
);
const Buttons = React.lazy(() =>
  import("./components/Elements/Buttons/Buttons")
);
const DropDowns = React.lazy(() =>
  import("./components/Elements/DropDowns/DropDowns")
);
const ListGroups = React.lazy(() =>
  import("./components/Elements/ListGroups/ListGroups")
);
const MediaObjects = React.lazy(() =>
  import("./components/Elements/MediaObjects/MediaObjects")
);
const Navigation = React.lazy(() =>
  import("./components/Elements/Navigation/Navigation")
);
const Paginations = React.lazy(() =>
  import("./components/Elements/Paginations/Paginations")
);
const Popovers = React.lazy(() =>
  import("./components/Elements/Popovers/Popovers")
);
const Progress = React.lazy(() =>
  import("./components/Elements/Progress/Progress")
);
const Spinners = React.lazy(() =>
  import("./components/Elements/Spinners/Spinners")
);
const Tags = React.lazy(() => import("./components/Elements/Tags/Tags"));
const Thumbnails = React.lazy(() =>
  import("./components/Elements/Thumbnails/Thumbnails")
);
const Toasts = React.lazy(() => import("./components/Elements/Toasts/Toasts"));
const Tooltips = React.lazy(() =>
  import("./components/Elements/Tooltips/Tooltips")
);
const Tabs = React.lazy(() => import("./components/Elements/Tabs/Tabs"));
const Typographys = React.lazy(() =>
  import("./components/Elements/Typographys/Typographys")
);
// Forms
const AdvancedForms = React.lazy(() =>
  import("./components/Forms/AdvancedForms/AdvancedForms")
);
const FormEditor = React.lazy(() =>
  import("./components/Forms/FormEditor/FormEditor")
);
const FormElements = React.lazy(() =>
  import("./components/Forms/FormElements/FormElements")
);
const FormlementsSizes = React.lazy(() =>
  import("./components/Forms/FormElementsSizes/FormElementsSizes")
);
const FormLayouts = React.lazy(() =>
  import("./components/Forms/FormLayouts/FormLayouts")
);
const FormValidation = React.lazy(() =>
  import("./components/Forms/FormValidation/FormValidation")
);
const Formwizard = React.lazy(() =>
  import("./components/Forms/Formwizard/Formwizard")
);
// icons
const Bootstrapicons = React.lazy(() =>
  import("./components/Apps/Icons/Bootstrapicons/Bootstrapicons")
);
const Feathericons = React.lazy(() =>
  import("./components/Apps/Icons/FeatherIcons/Feathericons")
);
const Flagsicons = React.lazy(() =>
  import("./components/Apps/Icons/Flagsicons/Flagsicons")
);
const Ionicicons = React.lazy(() =>
  import("./components/Apps/Icons/Ionicicons/Ionicicons")
);
const MaterialDesignicons = React.lazy(() =>
  import("./components/Apps/Icons/MaterialDesignicons/MaterialDesignicons")
);
const Materialicons = React.lazy(() =>
  import("./components/Apps/Icons/Materialicons/Materialicons")
);
const Pe7icons = React.lazy(() =>
  import("./components/Apps/Icons/Pe7icons/Pe7icons")
);
const SimpleLineicons = React.lazy(() =>
  import("./components/Apps/Icons/Simplelineicons/Simplelineicons")
);
const Themifyicons = React.lazy(() =>
  import("./components/Apps/Icons/Themifyicons/Themifyicons")
);
const Typiconsicons = React.lazy(() =>
  import("./components/Apps/Icons/Typiconsicons/Typiconsicons")
);
const Weathericons = React.lazy(() =>
  import("./components/Apps/Icons/Weathericons/Weathericons")
);
const FontAwesome = React.lazy(() =>
  import("./components/Apps/Icons/FontAwesome/FontAwesome")
);
// Pages
const EmptyPage = React.lazy(() =>
  import("./components/Pages/EmptyPage/EmptyPage")
);
const Faq = React.lazy(() => import("./components/Pages/Faq/Faq"));
const Gallery = React.lazy(() => import("./components/Pages/Gallery/Gallery"));
const NotificationList = React.lazy(() =>
  import("./components/Pages/NotificationList/NotificationList")
);
const Invoice = React.lazy(() => import("./components/Pages/Invoice/Invoice"));
const MessageDanger = React.lazy(() =>
  import("./components/Pages/MessageDanger/MessageDanger")
);
const MessageWarning = React.lazy(() =>
  import("./components/Pages/MessageWarning/MessageWarning")
);
const Messagesuccess = React.lazy(() =>
  import("./components/Pages/Messagesuccess/Messagesuccess")
);
const PricingTables = React.lazy(() =>
  import("./components/Pages/PricingTables/PricingTables")
);
const Profile = React.lazy(() => import("./components/Pages/Profile/Profile"));
const Aboutus = React.lazy(() => import("./components/Pages/Aboutus/Aboutus"));
const Settings = React.lazy(() =>
  import("./components/Pages/Settings/settings")
);
//  Utilities
const Background = React.lazy(() =>
  import("./components/Utilities/Background/Background")
);
const Border = React.lazy(() => import("./components/Utilities/Border/Border"));
const Display = React.lazy(() =>
  import("./components/Utilities/Display/Display")
);
const Extras = React.lazy(() => import("./components/Utilities/Extras/Extras"));
const Flex = React.lazy(() => import("./components/Utilities/Flex/Flex"));
const Height = React.lazy(() => import("./components/Utilities/Height/Height"));
const Margin = React.lazy(() => import("./components/Utilities/Margin/Margin"));
const Padding = React.lazy(() =>
  import("./components/Utilities/Padding/Padding")
);
const Position = React.lazy(() =>
  import("./components/Utilities/Position/Position")
);
const Width = React.lazy(() => import("./components/Utilities/Width/Width"));
// coustom pages
const Error505 = React.lazy(() =>
  import("./components/Custompages/Error-505/Error-505")
);
const Error404 = React.lazy(() =>
  import("./components/Custompages/Error1-404/Error-404")
);
const Signin = React.lazy(() =>
  import("./components/Custompages/Signin/Signin")
);
const Signup = React.lazy(() =>
  import("./components/Custompages/Signup/Signup")
);
const Lockscreen = React.lazy(() =>
  import("./components/Custompages/Lockscreen/Lockscreen")
);
const Resetpassword = React.lazy(() =>
  import("./components/Custompages/Resetpassword/Resetpassword")
);
const Forgotpassword = React.lazy(() =>
  import("./components/Custompages/Forgotpassword/Forgotpassword")
);
const AddProduct = React.lazy(() =>
  import("./components/ECommerce/AddProduct/Addproduct")
);
const Custompage = React.lazy(() => import("./components/Custompage"));
const Underconstructionpage = React.lazy(() =>
  import("./components/UnderConstruction")
);
const LazyCurrencyExchange = React.lazy(() =>
  import("./components/Cryptocurrencies/CurrencyExchange/CurrencyExchange")
);
const LazyCryptoDashboard = React.lazy(() =>
  import("./components/Cryptocurrencies/Dashboard/Dashboard")
);
const AuthLogin = React.lazy(() => import("./Authentication/Login"));
const AuthSignup = React.lazy(() => import("./Authentication/Signup"));
const Root = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={`/`} element={<Auth />}>
              <Route index element={<AuthLogin />} />
              <Route path={`/authentication/login`} element={<AuthLogin />} />
              <Route path={`/authentication/signup`} element={<AuthSignup />} />
            </Route>
            <Route
              path={`/`}
              element={
                <React.Fragment>
                  <AuthRedirect /> {/* Include AuthRedirect */}
                  <ProtectedRoute>
                    <App />
                  </ProtectedRoute>
                </React.Fragment>
              }
            >
              {" "}
              <Route>
                <Route path={`/dashboard`} element={<Dashboard />} />
              </Route>
              {/* crytocurrency */}
              {/*  E-Commerce */}
              <Route>
                <Route path={`/ecommerce/account`} element={<Account />} />
                <Route path={`/ecommerce/eccart`} element={<ECCart />} />
                <Route path={`/ecommerce/cheackout`} element={<Checkout />} />
                <Route
                  path={`/ecommerce/ecdashboard`}
                  element={<ECDashboard />}
                />
                <Route path={`/ecommerce/order`} element={<Order />} />
                <Route
                  path={`/ecommerce/addproduct`}
                  element={<AddProduct />}
                />
                <Route
                  path={`/ecommerce/productdeatils`}
                  element={<Productdeatils />}
                />
                <Route path={`/ecommerce/wishlist`} element={<Wishlist />} />
                <Route path={`/ecommerce/products`} element={<Products />} />
              </Route>
              {/*Landingpage */}
              <Route>
                <Route
                  path={`/icons/bootsrapicons`}
                  element={<Bootstrapicons />}
                />
                <Route
                  path={`/icons/feathericons`}
                  element={<Feathericons />}
                />
                <Route path={`/icons/flagsicons`} element={<Flagsicons />} />
                <Route path={`/icons/fontawesome`} element={<FontAwesome />} />
                <Route path={`/icons/ionicicons`} element={<Ionicicons />} />
                <Route
                  path={`/icons/materialdesignicons`}
                  element={<MaterialDesignicons />}
                />
                <Route
                  path={`/icons/materialicons`}
                  element={<Materialicons />}
                />
                <Route path={`/icons/pe7icons`} element={<Pe7icons />} />
                <Route
                  path={`/icons/simplelineicons`}
                  element={<SimpleLineicons />}
                />
                <Route
                  path={`/icons/themifyicons`}
                  element={<Themifyicons />}
                />
                <Route
                  path={`/icons/typiconsicons`}
                  element={<Typiconsicons />}
                />
                <Route
                  path={`/icons/weathericons`}
                  element={<Weathericons />}
                />
              </Route>
              {/* Apps */}
              <Route>
                {<Route path={`/apps/widgets`} element={<Widgets />} />}
                <Route
                  path={`/apps/file/filedetails`}
                  element={<Filedetails />}
                />
                <Route
                  path={`/apps/file/filemangerlist`}
                  element={<FileManagerlist />}
                />
                <Route
                  path={`/apps/file/filemanger`}
                  element={<FileManager />}
                />
                <Route
                  path={`/apps/file/fileattachements`}
                  element={<FileAttachements />}
                />
                <Route path={`/apps/mail/mailinbox`} element={<Mailinbox />} />
                <Route path={`/apps/mail/viewmail`} element={<ViewMail />} />
                <Route
                  path={`/apps/mail/mailcomposed`}
                  element={<Mailcomposed />}
                />
                <Route
                  path={`/apps/maps/leafletsmaps`}
                  element={<Leafletmaps />}
                />

                <Route path={`/apps/maps/rsmmaps`} element={<Rsmmaps />} />
                <Route
                  path={`/apps/table/reactbasictables`}
                  element={<Reactbasicables />}
                />
                <Route
                  path={`/apps/table/reactdatatables`}
                  element={<Reactdatatables />}
                />
                <Route path={`/apps/blog/blog`} element={<Blog />} />
                <Route
                  path={`/apps/blog/blogdetails`}
                  element={<Blogdetails />}
                />
                <Route path={`/apps/blog/blogpost`} element={<Blogpost />} />
              </Route>
              {/* utilites */}
              <Route>
                <Route
                  path={`/utilities/background`}
                  element={<Background />}
                />
                <Route path={`/utilities/border`} element={<Border />} />
                <Route path={`/utilities/display`} element={<Display />} />
                <Route path={`/utilities/extras`} element={<Extras />} />
                <Route path={`/utilities/flex`} element={<Flex />} />
                <Route path={`/utilities/height`} element={<Height />} />
                <Route path={`/utilities/margin`} element={<Margin />} />
                <Route path={`/utilities/padding`} element={<Padding />} />
                <Route path={`/utilities/position`} element={<Position />} />
                <Route path={`/utilities/width`} element={<Width />} />
              </Route>
              {/* Element */}
              <Route>
                <Route path={`/elements/alerts`} element={<Alerts />} />
                <Route path={`/elements/avatars`} element={<Avatars />} />
                <Route
                  path={`/elements/accordions`}
                  element={<LazyAccordions />}
                />
                <Route path={`/elements/badges`} element={<Badges />} />
                <Route
                  path={`/elements/breadcrumbs`}
                  element={<Breadcrumbs />}
                />
                <Route path={`/elements/buttons`} element={<Buttons />} />
                <Route path={`/elements/dropdown`} element={<DropDowns />} />
                <Route path={`/elements/listgroups`} element={<ListGroups />} />
                <Route
                  path={`/elements/mediaobjects`}
                  element={<MediaObjects />}
                />
                <Route path={`/elements/navigation`} element={<Navigation />} />
                <Route
                  path={`/elements/paginations`}
                  element={<Paginations />}
                />
                <Route path={`/elements/popovers`} element={<Popovers />} />
                <Route path={`/elements/progress`} element={<Progress />} />
                <Route path={`/elements/spinner`} element={<Spinners />} />
                <Route path={`/elements/tags`} element={<Tags />} />
                <Route path={`/elements/thumbnails`} element={<Thumbnails />} />
                <Route path={`/elements/toasts`} element={<Toasts />} />
                <Route path={`/elements/tooltips`} element={<Tooltips />} />
                <Route path={`/elements/tabs`} element={<Tabs />} />

                <Route
                  path={`/elements/typographys`}
                  element={<Typographys />}
                />
              </Route>
              {/* // Adavance */}
              <Route>
                <Route path={`/advanceUI/calendar`} element={<Calendar />} />
                <Route path={`/advanceUI/cards`} element={<Cards />} />
                <Route path={`/advanceUI/chat`} element={<Chat />} />
                {/* <Route
                  path={`/advanceUI/contacts`}
                  element={<Contacts />}
                /> */}
                <Route path={`/advanceUI/carousels`} element={<Carousels />} />
                <Route path={`/advanceUI/collapse`} element={<Collapse />} />
                <Route path={`/advanceUI/modals`} element={<Modals />} />
                <Route
                  path={`/advanceUI/notifications`}
                  element={<Notifications />}
                />
                <Route path={`/advanceUI/rating`} element={<Rating />} />
                <Route path={`/advanceUI/search`} element={<Search />} />
                <Route
                  path={`/advanceUI/sweetalert`}
                  element={<Sweetalert />}
                />
                <Route path={`/advanceUI/timeline`} element={<Timeline />} />
                <Route path={`/advanceUI/treeview`} element={<Treeview />} />
                <Route path={`/advanceUI/userlist`} element={<UserList />} />
                {/* // Adavance-UI-end */}
              </Route>
              {/* // Forms */}
              <Route>
                <Route
                  path={`/forms/formelements`}
                  element={<FormElements />}
                />
                <Route
                  path={`/forms/advancedforms`}
                  element={<AdvancedForms />}
                />
                <Route path={`/forms/formeditor`} element={<FormEditor />} />
                <Route
                  path={`/forms/formelements`}
                  element={<FormElements />}
                />
                <Route
                  path={`/forms/formelementssizes`}
                  element={<FormlementsSizes />}
                />
                <Route path={`/forms/formlayout`} element={<FormLayouts />} />
                <Route
                  path={`/forms/formvalidation`}
                  element={<FormValidation />}
                />
                <Route path={`/forms/formwizard`} element={<Formwizard />} />
              </Route>
              {/* Charts */}
              {/* <Route>
                <Route
                  path={`/charts/chartjs`}
                  element={<ChartJs />}
                />
                <Route
                  path={`/charts/echart`}
                  element={<Echart />}
                />
                <Route
                  path={`/charts/nvd3charts`}
                  element={<Nvd3Charts />}
                />
                <Route
                  path={`/charts/piacharts`}
                  element={<Piacharts />}
                />
                <Route
                  path={`/charts/c3barcharts`}
                  element={<C3barcharts />}
                />
              </Route> */}
              {/* Pages */}
              <Route>
                <Route path={`/pages/categories`} element={<Categories />} />
                <Route path={`/pages/tages`} element={<Tages />} />
                <Route
                  path={`/pages/categories/create`}
                  element={<AddEditcategories />}
                />
                <Route path={`/pages/tags/create`} element={<AddTags />} />
                <Route
                  path={`/pages/projects/create`}
                  element={<AddProjects />}
                />
                <Route
                  path={`/pages/uploadimage`}
                  element={<UploadImage />}
                />
                <Route
                  path={`/pages/projects/edit/:id`}
                  element={<EditProjects />}
                />
                <Route
                  path={`/pages/publication/edit/:id`}
                  element={<EditPublications />}
                />

                <Route
                  path={`/pages/categories/edit/:id`}
                  element={<AddEditcategories />}
                />
                <Route path={`/pages/contacts`} element={<Contacts />} />
                <Route path={`/pages/questions`} element={<Questions />} />

                <Route path={`/pages/training`} element={<Trainings />} />
                <Route path={`/pages/settingspage`} element={<Sliders />} />
                <Route path={`/pages/ourpartners`} element={<OurPartners />} />
                <Route path={`/pages/linkes`} element={<Links />} />
                <Route path={`/pages/contactus`} element={<ContactUs />} />
                <Route path={`/pages/users`} element={<Users />} />
                <Route path={`/pages/images`} element={<Images />} />
                <Route path={`/pages/projects`} element={<Projects />} />
                <Route
                  path={`/pages/publications`}
                  element={<Publications />}
                />
                <Route path={`/pages/images/create`} element={<AddImages />} />
                <Route
                  path={`/pages/ourpartners/create`}
                  element={<AddOurPartners />}
                />

                <Route path={`/pages/links/create`} element={<AddLinks />} />
                <Route
                  path={`/pages/contactus/create`}
                  element={<AddContactUs />}
                />
                <Route
                  path={`/pages/contacts/create`}
                  element={<AddContacts />}
                />
                  <Route
                  path={`/pages/questions/create`}
                  element={<AddQuestions />}
                />
                <Route
                  path={`/pages/training/create`}
                  element={<AddTraining />}
                />
                <Route
                  path={`/pages/publications/create`}
                  element={<AddPublications />}
                />
                <Route path={`/pages/authors`} element={<Authors />} />
                <Route
                  path={`/pages/authors/create`}
                  element={<AddAuthors />}
                />
                <Route path={`/pages/emptypage`} element={<EmptyPage />} />
                <Route path={`/pages/faq`} element={<Faq />} />
                <Route
                  path={`/pages/notificationlist`}
                  element={<NotificationList />}
                />
                <Route path={`/pages/gallery`} element={<Gallery />} />
                <Route path={`/pages/invoice`} element={<Invoice />} />
                <Route
                  path={`/pages/pricingtable`}
                  element={<PricingTables />}
                />
                <Route path={`/pages/profile`} element={<Profile />} />
                <Route path={`/pages/aboutus`} element={<Aboutus />} />
                <Route path={`/pages/settings`} element={<Settings />} />
              </Route>
              {/* Errors */}
            </Route>

            <Route path={`/pages/switcherpages`} element={<Themepage />} />
            {/* ........................................Custompage............................................... */}
            <Route path={`/`} element={<Custompage />}>
              <Route
                path={`/pages/messagesuccess`}
                element={<Messagesuccess />}
              />
              <Route
                path={`/pages/messagewarning`}
                element={<MessageWarning />}
              />
              <Route
                path={`/pages/messagedanger`}
                element={<MessageDanger />}
              />
              {/* custompages */}
              <Route path={`/custompages/error404`} element={<Error404 />} />
              <Route
                path={`/custompages/lockscreen`}
                element={<Lockscreen />}
              />
              <Route path={`/custompages/error505`} element={<Error505 />} />
              <Route
                path={`/custompages/forgotpassword`}
                element={<Forgotpassword />}
              />
              <Route
                path={`/custompages/resetpassword`}
                element={<Resetpassword />}
              />
              <Route path={`/custompages/signup`} element={<Signup />} />
              <Route path={`/custompages/signin`} element={<Signin />} />
              <Route
                path={`/custompages/underconstruction`}
                element={<Underconstructionpage />}
              />
            </Route>
            <Route path={`/landingpage`} element={<Landingpageapp />} />
            {/* ........................................Errorpage............................................... */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
};
const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Root />
    </Provider>
  </QueryClientProvider>
);
