FlowRouter.route('/',{
	name: 'home',
	action() {
		BlazeLayout.render('main');
	}

});

FlowRouter.route('/Details',{
	name: 'Details',
	action() {
		BlazeLayout.render('charinfo');
	}

});

FlowRouter.route('/Equipment',{
	name: 'Equipment',
	action() {
		BlazeLayout.render('Equipment' );
	}

});

FlowRouter.route('/Sidebag',{
	name: 'Sidebag',
	action() {
		BlazeLayout.render('sidebag');
	}

});

FlowRouter.route('/SidebagItem',{
	name: 'SidebagItem',
	action() {
		BlazeLayout.render('sidebagdesc');
	}

});

FlowRouter.route('/EquipmentItem',{
	name: 'EquipmentItem',
	action() {
		BlazeLayout.render('equipmentdesc');
	}

});

FlowRouter.route('/EquipmentSlot',{
	name: 'EquipmentSlot',
	action() {
		BlazeLayout.render('slotdesc');
	}

});
