
/**
Constructor
Do not call Function in Constructor.
*/
class naverProject000()
{
	super();

	//TODO:edit here

}
extends AView;


function naverProject000*init(context, evtListener)
{
	super.init(context, evtListener);
	this.search.setFocus();

	//TODO:edit here

};

function naverProject000*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function naverProject000*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function naverProject000*changeBtn(comp, info, e)
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




function naverProject000*changeTabBtn(comp, info, e)
{
	var innerView = this.tabpanel.loadView('Source/SubView/subpannel.lay');
	this.tabPanGrey.setImage('Assets/tabpanBlue.png');
	this.tabPanGrey.setIconSize('23px');
	this.tabcard.setImage('Assets/Btngrey.png');
	this.tabcard.setIconSize('23px');
};

function naverProject000*changeCardBtn(comp, info, e)
{
	var innerView = this.tabpanel.loadView('Source/SubView/subcard.lay');
	this.tabcard.setImage('Assets/newsBtn2.png');
	this.tabcard.setIconSize('23px');
	this.tabPanGrey.setImage('Assets/newsBtn1.png');
	this.tabPanGrey.setIconSize('23px');
};
