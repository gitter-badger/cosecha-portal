publicRoutes = FlowRouter.group({
	name: 'publicRoutes'
});

privateRoutes = FlowRouter.group({
	name: 'privateRoutes',
	triggersEnter: [function(context,redirect){
		if(!Meteor.userId()){
			return FlowRouter.go('/');
		}
	}]
});

publicRoutes.route('/', {
	name: 'Home',
	action: function(){
		ReactLayout.render(HomeLayout,{

		})
	}
});

privateRoutes.route('/dashboard', {
	name: 'Dashboard',
	action: function() {
		ReactLayout.render(Layout, {
			sidebar_left: 'Sidebar Left',
			sidebar_right: 'Sidebar Right',
			content: 'Main Content'
		})
	}
})