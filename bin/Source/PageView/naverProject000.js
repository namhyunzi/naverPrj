
/**
Constructor
Do not call Function in Constructor.
*/
function naverProject000()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(naverProject000, AView);


naverProject000.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	this.search.setFocus();

	//TODO:edit here

};

naverProject000.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

naverProject000.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

naverProject000.prototype.changeBtn = function(comp, info, e)
{
	
 	if (this.toggleView.element.classList.contains('isExpended')) {
		this.moreBtn.setImage('Assets/more.png');
		this.moreBtn.setIconSize('15px');
  		this.toggleView.element.classList.remove('isExpended');
	} else {
		this.moreBtn.setImage('Assets/x.png');
		this.moreBtn.setIconSize('15px');
  		this.toggleView.element.classList.add('isExpended');
	}
	
};




naverProject000.prototype.changeTabBtn = function(comp, info, e)
{
	var innerView = this.tabpanel.loadView('Source/SubView/subpannel.lay');
	this.tabPanGrey.setImage('Assets/tabpanBlue.png');
	this.tabPanGrey.setIconSize('23px');
	this.tabcard.setImage('Assets/Btngrey.png');
	this.tabcard.setIconSize('23px');
};

naverProject000.prototype.changeCardBtn = function(comp, info, e)
{
	var innerView = this.tabpanel.loadView('Source/SubView/subcard.lay');
	this.tabcard.setImage('Assets/newsBtn2.png');
	this.tabcard.setIconSize('23px');
	this.tabPanGrey.setImage('Assets/newsBtn1.png');
	this.tabPanGrey.setIconSize('23px');
};
