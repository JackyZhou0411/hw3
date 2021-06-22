// JavaScript source code
var svg1 = d3.select("body").select(".svg-container").append("svg")
                .attr("width", 900)
                .attr("height", 500)
                
            d3.csv('https://raw.githubusercontent.com/JackyZhou0411/hw3/main/FinalProjectData.csv').then(function(data) {
                //if (error) throw error;
               // console.log(data);
                dataset = data;
                
              
                var i=7
                var imgs = svg1.selectAll('text').data(dataset)
                    .enter()
                .append("svg:image")
                .attr("x", "800")
                .attr("y", "10")
                .attr("width", "50")
                .attr("height", "50")
              . attr("xlink:href", function(d){
              if(dataset[i].console=='PS4'){
              return "icon/ps4_icon.jpg";
              }else if(dataset[i].console=='NS'){
              return "icon/switch_icon.jpg";
              }else{return "icon/xbox_icon.jpg" }
              });
              //. attr("xlink:href", "icon/computer_icon.jpg");
               
                var img2 = svg1
                .append("svg:image")
                .attr("xlink:href", "https://upload.wikimedia.org/wikipedia/zh/5/51/Minecraft_cover.png")
                .attr("x", "10")
                .attr("y", "80")
                .attr("width", "300")
                .attr("height", "300");
               
               
                svg1.selectAll('text').data(dataset)
                    .enter()
                   .append("text")
                 
                    .attr("x", 500)
                     .attr("y", 30)
                    
                    .attr("fill", "SlateGray")    
                       .attr("text-anchor",'middle')
                        .attr("font-size",'20px')
                    .text(dataset[i].game);
                   
             
                     
                svg1
                    .append('text') 
                    
                     .attr("x", 290)
                     .attr("y", 300)
                    .attr("fill", "black")    
                       // .attr("text-anchor",'end')
                        .attr("font-size",'20px')
                    .text("Publisher:"+dataset[i].Publisher) ;
                   
                    svg1
                    .append('text') 
                    
                     .attr("x", 290)
                     .attr("y", 320)
                    .attr("fill", "black")    
                       // .attr("text-anchor",'end')
                        .attr("font-size",'20px')
                    .text("Release Day:"+dataset[i].Release_Year+"/"+dataset[i].Release_Month+"/"+dataset[i].Release_Day) ;
         
                   svg1
                    .append('text') 
                    
                     .attr("x", 290)
                     .attr("y", 340)
                    .attr("fill", "black")    
                       // .attr("text-anchor",'end')
                        .attr("font-size",'20px')
                    .text("Release Day:"+dataset[i].Genre) ;
                    svg1
                    .append('text') 
                    
                     .attr("x", 290)
                     .attr("y", 100)
                    .attr("fill", "black")    
                       //.attr("text-anchor",'middle')
                        .attr("font-size",'20px')
                    .text(dataset[i].Introduction) ;