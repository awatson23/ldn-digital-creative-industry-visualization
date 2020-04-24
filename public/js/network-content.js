 
 
 var width = window.innerWidth / 0.8;
            var height = window.innerHeight / 1;

            //imports in a colour palette as an array
            var color = d3.scaleOrdinal(d3.schemeCategory20b)
            .domain([1, 2, 3, 4, 5, 6])
            .range(["#011638", "#d33f49" , "#eec643", "#68B3A2", "#429b40", "#1880a0"]);
                    //companies, job titles (alumni), back end, front end, framework tech  
            var svg = d3.select("body")
                .append('svg')
                .attr("width", width)
                .attr("height", height);
                
                svg.append("rect")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("fill", "#fff");

            var simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function(d) {
                    return d.id;
                }))
                .force('charge', d3.forceManyBody()
                    .strength(-650)
                    .distanceMax(10000)
                )
                .force("center", d3.forceCenter(width / 2, height / 2));


            function buildDiagram(graph) {

                var link = svg.append("g")
                    .style("stroke", "#aaa")
                    .selectAll("line")
                    .data(graph.links)
                    .enter().append("line");

                var node = svg.append("g")
                    .attr("class", "nodes")
                    .selectAll("circle")
                    .data(graph.nodes)

                //setting static properties and attaching event listeners when circles are created
                .enter()
                    .append("circle")
                    .style("stroke", "#424242")
                    .style("stroke-width", "1px")
                    .style("fill", function(d) {
                        return color(d.group);
                    })
                    .call(d3.drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended));


                //create SVG labels from text values
                var label = svg.append("g")
                    .selectAll("text")
                    .data(graph.nodes)
                    .enter()
                    .append("text")
                    .text(function(d) {
                        return d.name;
                    });

                simulation
                    .nodes(graph.nodes)
                    .on("tick", ticked);

                simulation.force("link")
                    .links(graph.links);

                function ticked() {
                    link
                        .attr("x1", function(d) {
                            return d.source.x;
                        })
                        .attr("y1", function(d) {
                            return d.source.y;
                        })
                        .attr("x2", function(d) {
                            return d.target.x;
                        })
                        .attr("y2", function(d) {
                            return d.target.y;
                        });

                    node
                    //setting dynamic values for the circles, that will update as necessary for each tick/iteration
                        .attr("r", function(d) {
                        return d.rad + 3;
                    })

                    .attr("cx", function(d) {
                            return d.x + 5;
                        })
                        .attr("cy", function(d) {
                            return d.y - 3;
                        });

                    label
                        .attr("x", function(d) {
                            return d.x + 18;
                        })
                        .attr("y", function(d) {
                            return d.y + 25;
                        })
                        .style("font-size", "13px").style("fill", "#444")
                        .style("font-family", 'akzidenz-grotesk_bqregular');
                }
            }

            function dragstarted(d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart()
                d.fx = d.x
                d.fy = d.y
            }

            function dragged(d) {
                d.fx = d3.event.x
                d.fy = d3.event.y
            }

            function dragended(d) {
                d.fx = d3.event.x
                d.fy = d3.event.y
                if (!d3.event.active) simulation.alphaTarget(0);
            }

            var graph = {
                "nodes": [{
                    "id": "1",
                    "group": 4,
                    "name": "JavaScript",
                    "rad": 12
                }, {
                    "id": "2",
                    "group": 3,
                    "name": "PHP",
                    "rad": 12
                }, {
                    "id": "3",
                    "group": 3,
                    "name": "Python",
                    "rad": 12
                }, {
                    "id": "4",
                    "group": 4,
                    "name": "CSS",
                    "rad": 15
                }, {
                    "id": "5",
                    "group": 2,
                    "name": "Back End Developer",
                    "rad": 15
                }, {
                    "id": "6",
                    "group": 2,
                    "name": "Front End Developer",
                    "rad": 15
                }, {
                    "id": "7",
                    "group": 2,
                    "name": "Web Designer",
                    "rad": 9
                }, {
                    "id": "8",
                    "group": 2,
                    "name": "Project Lead",
                    "rad": 18
                }, {
                    "id": "9",
                    "group": 2,
                    "name": "UI-UX Designer",
                    "rad": 9
                }, {
                    "id": "10",
                    "group": 2,
                    "name": "Full Stack Developer",
                    "rad": 15
                }, {
                    "id": "11",
                    "group": 3,
                    "name": "Python Pandas",
                    "rad": 12
                }, {
                    "id": "12",
                    "group": 3,
                    "name": "Python Web Scraping",
                    "rad": 12
                }, {
                    "id": "13",
                    "group": 3,
                    "name": "Python Flask",
                    "rad": 12
                }, {
                    "id": "14",
                    "group": 2,
                    "name": "Design Lead",
                    "rad": 15
                }, {
                    "id": "15",
                    "group": 6,
                    "name": "Drupal",
                    "rad": 15
                }],


                "links": [{
                    "source": "8",
                    "target": "10",
                    "value": 4

                }, {
                    "source": "4",
                    "target": "7",
                    "value": 4

                },{
                    "source": "10",
                    "target": "15",
                    "value": 4

                },{
                    "source": "15",
                    "target": "6",
                    "value": 4

                },{
                    "source": "8",
                    "target": "6",
                    "value": 4

                }, {
                    "source": "8",
                    "target": "5",
                    "value": 4

                }, {
                    "source": "8",
                    "target": "5",
                    "value": 4

                }, {
                    "source": "8",
                    "target": "14",
                    "value": 4

                }, {
                    "source": "5",
                    "target": "13",
                    "value": 4

                }, {
                    "source": "5",
                    "target": "1",
                    "value": 4

                }, {
                    "source": "5",
                    "target": "2",
                    "value": 4

                }, {
                    "source": "14",
                    "target": "9",
                    "value": 4

                }, {
                    "source": "14",
                    "target": "7",
                    "value": 4

                }, {
                    "source": "10",
                    "target": "3",
                    "value": 4

                }, {
                    "source": "5",
                    "target": "11",
                    "value": 4

                }, {
                    "source": "5",
                    "target": "12",
                    "value": 4

                }, {
                    "source": "6",
                    "target": "4",
                    "value": 4

                }, {
                    "source": "10",
                    "target": "13",
                    "value": 4

                }, {
                    "source": "10",
                    "target": "1",
                    "value": 4

                }]
            }

            //run the main function and pass our data container
            buildDiagram(graph);