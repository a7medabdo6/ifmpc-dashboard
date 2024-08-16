import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from "./layouts/Loader/Loader";
import Auth from "./Authentication/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import AddEditcategories from "./components/Pages/Categories/AddEdit";
import Categories from "./components/Pages/Categories";
import AddContacts from "./components/Pages/Contacts/Add";
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
import EditeProjects from "./components/Pages/Projects/Edit";
import EditePublications from "./components/Pages/Publications/Edit";

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
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Auth />}>
              <Route index element={<AuthLogin />} />
              <Route
                path={`${process.env.PUBLIC_URL}/authentication/login`}
                element={<AuthLogin />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/authentication/signup`}
                element={<AuthSignup />}
              />
            </Route>
            <Route
              path={`${process.env.PUBLIC_URL}/`}
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
                <Route
                  path={`${process.env.PUBLIC_URL}/dashboard`}
                  element={<Dashboard />}
                />
              </Route>
              {/* crytocurrency */}
              {/*  E-Commerce */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/account`}
                  element={<Account />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/eccart`}
                  element={<ECCart />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/cheackout`}
                  element={<Checkout />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/ecdashboard`}
                  element={<ECDashboard />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/order`}
                  element={<Order />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/addproduct`}
                  element={<AddProduct />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/productdeatils`}
                  element={<Productdeatils />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/wishlist`}
                  element={<Wishlist />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/ecommerce/products`}
                  element={<Products />}
                />
              </Route>
              {/*Landingpage */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/bootsrapicons`}
                  element={<Bootstrapicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/feathericons`}
                  element={<Feathericons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/flagsicons`}
                  element={<Flagsicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/fontawesome`}
                  element={<FontAwesome />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/ionicicons`}
                  element={<Ionicicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/materialdesignicons`}
                  element={<MaterialDesignicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/materialicons`}
                  element={<Materialicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/pe7icons`}
                  element={<Pe7icons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/simplelineicons`}
                  element={<SimpleLineicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/themifyicons`}
                  element={<Themifyicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/typiconsicons`}
                  element={<Typiconsicons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/icons/weathericons`}
                  element={<Weathericons />}
                />
              </Route>
              {/* Apps */}
              <Route>
                {
                  <Route
                    path={`${process.env.PUBLIC_URL}/apps/widgets`}
                    element={<Widgets />}
                  />
                }
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/file/filedetails`}
                  element={<Filedetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/file/filemangerlist`}
                  element={<FileManagerlist />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/file/filemanger`}
                  element={<FileManager />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/file/fileattachements`}
                  element={<FileAttachements />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/mail/mailinbox`}
                  element={<Mailinbox />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/mail/viewmail`}
                  element={<ViewMail />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/mail/mailcomposed`}
                  element={<Mailcomposed />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/maps/leafletsmaps`}
                  element={<Leafletmaps />}
                />

                <Route
                  path={`${process.env.PUBLIC_URL}/apps/maps/rsmmaps`}
                  element={<Rsmmaps />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/table/reactbasictables`}
                  element={<Reactbasicables />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/table/reactdatatables`}
                  element={<Reactdatatables />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/blog/blog`}
                  element={<Blog />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/blog/blogdetails`}
                  element={<Blogdetails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/apps/blog/blogpost`}
                  element={<Blogpost />}
                />
              </Route>
              {/* utilites */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/background`}
                  element={<Background />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/border`}
                  element={<Border />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/display`}
                  element={<Display />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/extras`}
                  element={<Extras />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/flex`}
                  element={<Flex />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/height`}
                  element={<Height />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/margin`}
                  element={<Margin />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/padding`}
                  element={<Padding />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/position`}
                  element={<Position />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/utilities/width`}
                  element={<Width />}
                />
              </Route>
              {/* Element */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/alerts`}
                  element={<Alerts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/avatars`}
                  element={<Avatars />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/accordions`}
                  element={<LazyAccordions />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/badges`}
                  element={<Badges />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/breadcrumbs`}
                  element={<Breadcrumbs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/buttons`}
                  element={<Buttons />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/dropdown`}
                  element={<DropDowns />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/listgroups`}
                  element={<ListGroups />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/mediaobjects`}
                  element={<MediaObjects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/navigation`}
                  element={<Navigation />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/paginations`}
                  element={<Paginations />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/popovers`}
                  element={<Popovers />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/progress`}
                  element={<Progress />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/spinner`}
                  element={<Spinners />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/tags`}
                  element={<Tags />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/thumbnails`}
                  element={<Thumbnails />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/toasts`}
                  element={<Toasts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/tooltips`}
                  element={<Tooltips />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/tabs`}
                  element={<Tabs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/elements/typographys`}
                  element={<Typographys />}
                />
              </Route>
              {/* // Adavance */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/calendar`}
                  element={<Calendar />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/cards`}
                  element={<Cards />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/chat`}
                  element={<Chat />}
                />
                {/* <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/contacts`}
                  element={<Contacts />}
                /> */}
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/carousels`}
                  element={<Carousels />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/collapse`}
                  element={<Collapse />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/modals`}
                  element={<Modals />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/notifications`}
                  element={<Notifications />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/rating`}
                  element={<Rating />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/search`}
                  element={<Search />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/sweetalert`}
                  element={<Sweetalert />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/timeline`}
                  element={<Timeline />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/treeview`}
                  element={<Treeview />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/advanceUI/userlist`}
                  element={<UserList />}
                />
                {/* // Adavance-UI-end */}
              </Route>
              {/* // Forms */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formelements`}
                  element={<FormElements />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/advancedforms`}
                  element={<AdvancedForms />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formeditor`}
                  element={<FormEditor />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formelements`}
                  element={<FormElements />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formelementssizes`}
                  element={<FormlementsSizes />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formlayout`}
                  element={<FormLayouts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formvalidation`}
                  element={<FormValidation />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/forms/formwizard`}
                  element={<Formwizard />}
                />
              </Route>
              {/* Charts */}
              {/* <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/charts/chartjs`}
                  element={<ChartJs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/charts/echart`}
                  element={<Echart />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/charts/nvd3charts`}
                  element={<Nvd3Charts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/charts/piacharts`}
                  element={<Piacharts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/charts/c3barcharts`}
                  element={<C3barcharts />}
                />
              </Route> */}
              {/* Pages */}
              <Route>
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/categories`}
                  element={<Categories />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/tages`}
                  element={<Tages />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/categories/create`}
                  element={<AddEditcategories />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/tags/create`}
                  element={<AddTags />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/projects/create`}
                  element={<AddProjects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/projects/edite`}
                  element={<EditeProjects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/publication/edit`}
                  element={<EditePublications />}
                />

                
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/categories/edit/:id`}
                  element={<AddEditcategories />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/contacts`}
                  element={<Contacts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/ourpartners`}
                  element={<OurPartners />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/linkes`}
                  element={<Links />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/contactus`}
                  element={<ContactUs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/users`}
                  element={<Users />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/images`}
                  element={<Images />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/projects`}
                  element={<Projects />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/publications`}
                  element={<Publications />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/images/create`}
                  element={<AddImages />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/ourpartners/create`}
                  element={<AddOurPartners />}
                />
                
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/links/create`}
                  element={<AddLinks />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/contactus/create`}
                  element={<AddContactUs />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/contacts/create`}
                  element={<AddContacts />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/publications/create`}
                  element={<AddPublications />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/authors`}
                  element={<Authors />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/authors/create`}
                  element={<AddAuthors />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/emptypage`}
                  element={<EmptyPage />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/faq`}
                  element={<Faq />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/notificationlist`}
                  element={<NotificationList />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/gallery`}
                  element={<Gallery />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/invoice`}
                  element={<Invoice />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/pricingtable`}
                  element={<PricingTables />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/profile`}
                  element={<Profile />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/aboutus`}
                  element={<Aboutus />}
                />
                <Route
                  path={`${process.env.PUBLIC_URL}/pages/settings`}
                  element={<Settings />}
                />
              </Route>
              {/* Errors */}
            </Route>

            <Route
              path={`${process.env.PUBLIC_URL}/pages/switcherpages`}
              element={<Themepage />}
            />
            {/* ........................................Custompage............................................... */}
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Custompage />}>
              <Route
                path={`${process.env.PUBLIC_URL}/pages/messagesuccess`}
                element={<Messagesuccess />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/messagewarning`}
                element={<MessageWarning />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/pages/messagedanger`}
                element={<MessageDanger />}
              />
              {/* custompages */}
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/error404`}
                element={<Error404 />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/lockscreen`}
                element={<Lockscreen />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/error505`}
                element={<Error505 />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/forgotpassword`}
                element={<Forgotpassword />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/resetpassword`}
                element={<Resetpassword />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/signup`}
                element={<Signup />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/signin`}
                element={<Signin />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/custompages/underconstruction`}
                element={<Underconstructionpage />}
              />
            </Route>
            <Route
              path={`${process.env.PUBLIC_URL}/landingpage`}
              element={<Landingpageapp />}
            />
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
