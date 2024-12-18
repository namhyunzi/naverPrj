
/**
Constructor
Do not call Function in Constructor.
*/
class subpannel()
{
	super();

	//TODO:edit here

}
extends AView;


function subpannel*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function subpannel*onInitDone()
{
	super.onInitDone();
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


function subpannel*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);


};



