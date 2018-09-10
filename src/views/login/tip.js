import Vue from 'vue';
// import 'element-ui/lib/theme-chalk/index.css';
import '../../styles/element-variables.scss'
import { Loading, MessageBox, Message, Notification } from 'element-ui';

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
