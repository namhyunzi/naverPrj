
/**
Constructor
Do not call Function in Constructor.
*/
function subpannel()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(subpannel, AView);


subpannel.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

subpannel.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	listview.setDelegator(this);
	var urlArr = ['Source/SubView/list1.lay', 'Source/SubView/list2.lay', 'Source/SubView/list3.lay', 'Source/SubView/list4.lay', 'Source/SubView/list5.lay', 'Source/SubView/list6.lay'];
	var dataArr = [1, 2, 3, 4, 5, 6];
	listview.addItems(urlArr, dataArr, true, function(items)
{
    for(var i in items)
    {
        console.log(items[i]);
    }
});
};


subpannel.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);


};



