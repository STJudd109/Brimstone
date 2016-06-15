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

FlowRouter.route('/Extras',{
	name: 'Extras',
	action() {
		BlazeLayout.render('extras');
	}

});

FlowRouter.route('/Effects',{
	name: 'Effects',
	action() {
		BlazeLayout.render('effects');
	}

});

FlowRouter.route('/Abilities',{
	name: 'Abilities',
	action() {
		BlazeLayout.render('abilities');
	}

});

FlowRouter.route('/LevelUP',{
	name: 'LevelUP',
	action() {
		BlazeLayout.render('lvlup');
	}

});
