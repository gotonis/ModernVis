function createVis(errors, Eldrazi, Humans, Hollow, Living)
{
    // call your own functions from here, or embed code here
    var width = 800;
    var height = 500;

   // console.log(Eldrazi);
        
    
  
    
}

// uncomment the cdn.rawgit.com versions and comment the cis.umassd.edu versions if you require all https data
d3.queue()
    .defer(d3.csv, "./Decklists/MOCS/EldraziAggro.csv")
    .defer(d3.csv, "./Decklists/MOCS/Humans.csv")
    .defer(d3.csv, "./Decklists/MOCS/HollowOne.csv")
    .defer(d3.csv, "./Decklists/MOCS/LivingEnd.csv")
    .await(createVis);
