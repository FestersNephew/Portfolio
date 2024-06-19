import React, { useState } from 'react';
import MapSVG from './MapSVG';
import Modal from './Modal';
import './RealEstateMap.css';

const townInfo = {
  wells: {
      name: "Wells",
      description: `
        Wells is a picturesque town nestled in the Green Mountains of Vermont, known for its serene environment and natural beauty. One of the town's standout features is Lake St. Catherine, a popular destination for swimming, boating, fishing, and picnicking. The lake is surrounded by lush natural areas perfect for hiking, bird watching, and enjoying the great outdoors.

        Wells is steeped in history, with charming historic buildings and a close-knit community that welcomes visitors year-round. The town offers a tranquil escape from the hustle and bustle, making it an ideal spot for relaxation and outdoor recreation.

        For nature enthusiasts, the nearby Lake St. Catherine State Park provides ample opportunities for camping, hiking, and wildlife observation. The park's scenic trails and picnic areas make it a favorite spot for families and outdoor lovers.
        <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
        <a href="https://www.lakehillvt.com/" target="_blank">Lake Hill Farm</a><br/>
        <a href="https://lakestcatherinecountryclub.com/" target="_blank">Lake St. Catherine Country Club</a><br/>
        <a href="http://www.vermontnaturalslate.com/" target="_blank">Vermont Natural Slate</a><br/>
        <a href="https://www.larsonfarmvt.com/" target="_blank">Larson Farm and Creamery</a><br/>
        <a href="https://www.pondmountaininn.com/" target="_blank">Pond Mountain Inn</a><br/>
        <a href="https://www.facebook.com/TheWellsCountryStore/" target="_blank">The Wells Country Store (FB)</a><br/>
        Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a><br/>
        Wellsmere Farm: <a href="tel:+18028845431">+1 (802) 884-5431</a>
      
    `,
  },
  manchester: {
      name: "Manchester",
      description: `
        Manchester is a vibrant town located in the heart of the Green Mountains of Vermont. Known for its rich history and charming New England atmosphere, Manchester offers a variety of attractions for visitors and residents alike. The town is home to the beautiful Hildene, the Lincoln Family Home, which provides a fascinating glimpse into American history and the lives of President Abraham Lincoln's descendants.

        Outdoor enthusiasts will find plenty to do in Manchester, with a range of activities including hiking, skiing, and fishing. The town's proximity to the Appalachian Trail and Green Mountain National Forest makes it a haven for hikers and nature lovers. In winter, nearby Bromley and Stratton Mountain resorts offer excellent skiing and snowboarding opportunities.

        Manchester's downtown area features an array of boutique shops, restaurants, and cultural venues. Visitors can enjoy a unique shopping experience at the Manchester Designer Outlets, which offers a variety of high-end brands. The town also boasts a thriving arts scene, with venues like the Southern Vermont Arts Center showcasing local and regional talent.

        History buffs will appreciate the American Museum of Fly Fishing, which chronicles the sport's rich heritage. The town's historic district, with its well-preserved 19th-century architecture, provides a picturesque backdrop for leisurely strolls.
          <br/><br/><span class="local-businesses">Best of Manchester:</span><br/>
          <a href="https://www.hildene.org/" target="_blank">Hildene, The Lincoln Family Home</a><br/>
          <a href="https://www.equinoxresort.com/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness" target="_blank">The Equinox Golf Resort & Spa</a><br/>
          <a href="https://www.manchesterwoodcraft.com/" target="_blank">Manchester Woodcraft</a><br/>
          <a href="https://www.northshire.com/" target="_blank">Northshire Bookstore</a><br/>
          <a href="https://www.mystic802.com/" target="_blank">Mystic Restaurant and Bar</a><br/>
          <a href="http://www.pastimepinball.com/" target="_blank">Pastime Pinball</a><br/>
          <a href="http://www.ellenbogengallery.art/" target="_blank">Ellenbogen Gallery</a><br/>
          <a href="http://www.burrburton.org/" target="_blank">Burr and Burton Academy</a><br/>
          <a href="https://www.thepharmacynorthshire.com/" target="_blank">The Pharmacy Northshire</a><br/>
          <a href="http://www.vermontbarber.com/" target="_blank">Phil's Barbershop and Shave Parlour</a><br/>
          Trent Stephens at Wohler Realty Group:<a href="tel:+18023458869"> +1 (802) 345-8869</a>
      `,
  },
  dorset: {
      name: "Dorset",
      description: `
          Dorset is a picturesque town nestled in the Green Mountains of Vermont, renowned for its historic charm and natural beauty. This idyllic town offers a blend of cultural and outdoor experiences, making it a delightful destination for residents and visitors alike.

          Dorset is home to the Dorset Theatre Festival, a celebrated summer stock theater that draws performers and audiences from far and wide. The festival is a cultural gem, offering high-quality productions that enrich the community's artistic landscape.

          One of Dorset's most unique attractions is the Dorset Marble Quarry, the oldest marble quarry in the United States. This historic site, dating back to 1785, has transformed into a popular swimming hole, attracting locals and tourists looking to cool off in its clear, refreshing waters during the summer months.

          The town's scenic beauty is perfect for outdoor enthusiasts. Dorset's landscape, characterized by rolling hills, lush forests, and sparkling streams, offers excellent opportunities for hiking, biking, and skiing. Trails such as the Dorset Peak Trail and Cutler Memorial Forest Trail provide breathtaking views and a chance to immerse oneself in nature.

          Dorset also boasts a rich agricultural heritage, with several local farms offering fresh produce, dairy, and artisanal goods. The town's charming village green, historic buildings, and welcoming community spirit add to its appeal, making Dorset a quintessential New England town.
            <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
            <a href="https://dorsettheatrefestival.org/" target="_blank">Dorset Theatre Festival</a><br/>
            <a href="https://www.barrowshouse.com/" target="_blank">Barrows House Inn & Restaurant</a><br/>
            <a href="https://www.dorsetinn.com/" target="_blank">The Dorset Inn</a><br/>
            <a href="http://www.dorsetfieldclub.com/" target="_blank">Dorset Field Club</a><br/>
            <a href="https://mksrestaurant.com/" target="_blank">MKS Restaurant</a><br/>
            <a href="http://www.hnwilliams.com/" target="_blank">H-N Williams Store</a><br/>
            <a href="https://jkadams.com/" target="_blank">JK Adams Kitchen Supply</a><br/>
            <a href="https://www.dorsetinn.com/" target="_blank">The Dorset Inn</a><br/>
            <a href="https://www.dorsetbakeryvt.com/" target="_blank">Dorset Bakery</a><br/>
            <a href="http://www.dorsetrvpark.com/" target="_blank">Dorset RV Park</a><br/>
            <a href="http://www.wilsonhouse.org/" target="_blank">The Wilson House of East Dorset</a><br/>
            <a href="http://www.brownenterprises.net/" target="_blank">Brown Enterprises Equiptment Rental</a><br/>
            <a href="http://aerieinnvt.com/" target="_blank">The Aerie Inn</a><br/>
            <a href="http://www.madtomorchard.com/" target="_blank">Mad Tom Orchard</a><br/>
            <a href="https://www.hitsshows.com/hits-events/hits-vermont-summer-festival/" target="_blank">Vermont Summer Horse Festival</a><br/>
            Long Trail Auto:<a href="tel:+18023624229"> + 1 (802) 362-4229</a>
      `,
  },
  danby: {
    name: "Danby",
    description: `
        Danby is a charming town located in the Taconic Mountains of Vermont, known for its beautiful rural landscapes and rich historical significance. This quaint town is a hidden gem that offers a unique blend of natural beauty and fascinating history.

        One of Danby's most notable features is the Danby Quarry, one of the largest underground marble quarries in the world. Operational since 1903, this quarry has produced marble used in many famous buildings, including the Jefferson Memorial in Washington, D.C., and the United Nations Headquarters in New York City. The marble from Danby is renowned for its high quality and stunning white appearance.

        The town is surrounded by scenic trails and natural areas, perfect for hiking and exploring. The nearby Green Mountain National Forest offers a plethora of outdoor activities, including hiking, bird watching, and nature photography. Trails such as the Little Rock Pond Trail and the Griffith Lake Trail provide breathtaking views of the mountains and serene lakes.

        In addition to its natural beauty, Danby boasts a rich agricultural heritage. The town's rural landscape is dotted with family farms that produce fresh dairy, meat, and vegetables. The Danby Village Store and local farmers' markets offer a taste of the town's agricultural bounty.

        Danby's history is also reflected in its well-preserved architecture and historic sites. The Danby Congregational Church, built in 1823, is a testament to the town's long-standing community spirit. The town's historical society actively works to preserve and share Danby's heritage through various events and exhibitions.

        <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
        <a href="http://www.smokeyhouse.org/" target="_blank">Smokey House Center</a><br/>
        <a href="https://indigogreen.shop/" target="_blank">Indigo and Green Boutique</a><br/>
        <a href="https://www.mountainheartvt.com/" target="_blank">Mountain Heart Farm</a><br/>
        <a href="https://www.vermontdanbymarble.com/" target="_blank">Vermont Quarries Corp.</a><br/>
        <a href="http://www.vermontmaplesweets.com/" target="_blank">Bushee Family Maple Farm</a><br/>
        Gerald White Engine Sales and Repair:<a href="tel:+18022935409"> +1 (802) 293-5409</a><br/>
        Fuller Sand and Gravel:<a href="tel:+18022935700"> +1 (802) 293-5700</a>
    `,
  },
  bennington: {
    name: "Bennington",
    description: `
        Bennington, nestled in the southwestern corner of Vermont, is a town rich in history, culture, and natural beauty. It is home to the Bennington Battle Monument, the tallest structure in Vermont, commemorating the pivotal Battle of Bennington during the American Revolutionary War. This historic town also boasts a vibrant arts scene, with the Bennington Museum housing an extensive collection of American art, including works by Grandma Moses.

        Geologically, Bennington lies in the heart of the Taconic Mountains, offering stunning vistas and a variety of outdoor activities. The Green Mountains to the east provide additional opportunities for hiking, skiing, and exploring Vermont's picturesque landscapes.

        Bennington's charming downtown area is filled with unique shops, cafes, and restaurants, making it a perfect destination for visitors seeking both relaxation and adventure. Whether you're interested in history, art, or simply enjoying the natural beauty of Vermont, Bennington has something for everyone.

        <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
        <a href="https://www.bluebenn.com/" target="_blank">Blue Benn Diner</a><br/>
        <a href="http://www.southshire.com/" target="_blank">The Southshire Little Hotel</a><br/>
        <a href="http://bennington.avocadopit.com/" target="_blank">Bennington Avacado Pit</a><br/>
        <a href="http://www.madisonbrewingco.com/" target="_blank">Madison Brewing Company</a><br/>
        <a href="http://juniperlanecannabis.com/" target="_blank">Juniper Lane Cannabis</a><br/>
        <a href="http://yourbellysdeli.com/" target="_blank">Your Belly's Deli</a><br/>
        <a href="https://www.benningtonbanner.com/" target="_blank">Bennington Banner Newspaper</a><br/>
        <a href="http://svhealthcare.org/" target="_blank">Southwestern Vermont Medical Center</a><br/>
    `,
  },
  shaftsbury: {
      name: "Shaftsbury",
      description: `
          Shaftsbury, a quaint town located in southwestern Vermont, is known for its rural charm and historic significance. Founded in 1761, Shaftsbury boasts a rich history that is deeply intertwined with the early development of Vermont. The town is home to the Shaftsbury Historical Society, which preserves and shares the local history through its museum and archives.

          Nature lovers will appreciate the serene beauty of Lake Shaftsbury State Park, a popular spot for swimming, fishing, and picnicking during the summer months. The park's tranquil lake and scenic trails offer a perfect retreat for those looking to enjoy the great outdoors.

          Shaftsbury is also recognized for its agricultural heritage, with numerous farms and orchards dotting the landscape. The town's rolling hills and fertile soil make it an ideal location for farming and gardening, contributing to its picturesque rural ambiance.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://kurtzexc.com/" target="_blank">Kurtz Excavating</a><br/>
          <a href="http://shaftsburycountrystore.com/" target="_blank">Shaftsbury Country Store</a><br/>
          <a href="http://megawattselectric.com/" target="_blank">Megawatt's Electric</a><br/>
          <a href="http://www.bennington.edu/robert-frost-stone-house-museum" target="_blank">Robert Frost Stone House Museum</a><br/>
          Shaftsbury Auto Repair:<a href="tel:+18024423355"> +1 (802) 442-3355</a>
          Mattisons Christmas Tree Farm:<a href="tel:+18023798158"> +1 (802) 379-8158</a>
      `,
  },
  arlington: {
    name: "Arlington",
    description: `
        Arlington, Vermont, is a charming town nestled between the Taconic and Green Mountains. With a history dating back to its founding in 1761, Arlington has played a significant role in the development of the state. The town was the first capital of the Vermont Republic and was home to Ethan Allen, a key figure in Vermont's early history.

        Arlington is renowned for its picturesque landscapes and outdoor recreational opportunities. The Battenkill River, which flows through the town, is famous for fly fishing and offers scenic spots for canoeing and kayaking. The area's lush forests and rolling hills provide ample opportunities for hiking, biking, and wildlife watching.

        Art and culture enthusiasts will appreciate the town's artistic heritage, as it was home to Norman Rockwell during his most prolific years. Visitors can explore the Norman Rockwell Exhibition and learn about his life and work.

        Arlington's community spirit is evident in its local events and markets, which bring residents and visitors together to celebrate the town's vibrant culture. The town also boasts several historic buildings and sites, offering a glimpse into its rich past.

        <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
        <a href="#" target="_blank">Placeholder Business 1</a><br/>
        <a href="#" target="_blank">Placeholder Business 2</a><br/>
        <a href="#" target="_blank">Placeholder Business 3</a><br/>
        <a href="#" target="_blank">Placeholder Business 4</a><br/>
    `,
},
sandgate: {
    name: "Sandgate",
    description: `
        Sandgate, Vermont, is a quaint and peaceful town located in the southwestern part of the state, nestled in the beautiful Taconic Mountains. Established in 1761, Sandgate is known for its serene landscapes, historic charm, and close-knit community.

        The town's scenic beauty is highlighted by its rolling hills, dense forests, and pristine waterways, making it a haven for outdoor enthusiasts. Sandgate offers excellent opportunities for hiking, bird watching, and nature photography. The town's rural roads and trails are perfect for leisurely walks and exploring the natural surroundings.

        Sandgate's history is deeply rooted in its agricultural past, with several historic farms and buildings dotting the landscape. Visitors can explore these historic sites and get a glimpse of the town's rich heritage.

        Despite its small size, Sandgate has a vibrant community spirit, with local events and gatherings bringing residents together. The town's quiet, off-the-beaten-path charm makes it an ideal destination for those seeking a peaceful retreat in the heart of nature.

        <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
        <a href="#" target="_blank">Placeholder Business 1</a><br/>
        <a href="#" target="_blank">Placeholder Business 2</a><br/>
        <a href="#" target="_blank">Placeholder Business 3</a><br/>
        
    `,
  },
  rupert: {
      name: "Rupert",
      description: `
          Rupert, Vermont, is a charming and picturesque town located in the southwestern part of the state, offering a tranquil retreat with a rich history and stunning natural landscapes. Established in 1761, Rupert has a long-standing heritage that is deeply intertwined with Vermont's rural traditions and agricultural roots.

          One of the standout features of Rupert is Merck Forest & Farmland Center, a 3,100-acre preserve that offers hiking, educational programs, and a working farm experience. Visitors can explore miles of trails, engage in hands-on farm activities, and learn about sustainable agriculture practices.

          The town's scenic beauty is accentuated by its rolling hills, lush forests, and clear streams, making it an ideal destination for outdoor enthusiasts. Whether it's hiking, bird watching, or simply enjoying the serene environment, Rupert provides a perfect setting for nature lovers.

          Rupert's historic charm is evident in its well-preserved buildings and landmarks. The town offers a glimpse into Vermont's past with its historic farms and classic New England architecture.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.merckforest.org/" target="_blank">Merck Forest & Farmland Center</a><br/>
          <a href="#" target="_blank">Placeholder Business 2</a><br/>
          <a href="#" target="_blank">Placeholder Business 3</a>
      `,
  },
  pawlet: {
      name: "Pawlet",
      description: `
          Pawlet, Vermont, is a charming and historic town nestled in the scenic Mettawee Valley. Known for its picturesque landscapes, Pawlet offers a blend of natural beauty, rich history, and a strong sense of community. Established in 1761, Pawlet boasts a heritage that is reflected in its well-preserved architecture and historic sites.

          The town is surrounded by rolling hills, lush forests, and the beautiful Mettawee River, making it a haven for outdoor enthusiasts. Hiking, fishing, and bird watching are popular activities in the area. The Merck Forest & Farmland Center, located nearby, provides miles of trails and a working farm experience for visitors to enjoy.

          Pawlet's village center is home to several historic buildings, including the Pawlet Town Hall and the Pawlet Community Church. The community hosts a variety of events throughout the year, fostering a close-knit atmosphere among residents.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://thebarnrestaurantvt.com/" target="_blank">The Barn Restaurant</a><br/>
          <a href="https://pawletstationrestaurant.com/" target="_blank">Pawlet Station Restaurant</a><br/>
          <a href="https://www.mettaweevalley.com/" target="_blank">Mettawee Valley Farm</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  windham: {
      name: "Windham",
      description: `
          Windham, Vermont, is a serene and historic town located in the heart of the Green Mountains. Founded in 1782, Windham offers a peaceful retreat with its stunning natural landscapes and rich history. The town is known for its picturesque setting, with rolling hills, lush forests, and scenic vistas.

          Outdoor enthusiasts will find plenty to enjoy in Windham. The town is surrounded by beautiful hiking trails, ideal for exploring the area's natural beauty. During the winter months, Windham transforms into a winter wonderland, offering excellent opportunities for snowshoeing and cross-country skiing.

          Windham's community spirit is evident in its local events and gatherings, which bring residents together throughout the year. The town's historical sites and charming architecture reflect its deep-rooted heritage and add to its unique character.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.windhamhillinn.com/" target="_blank">Windham Hill Inn</a><br/>
          <a href="https://www.graftonvillagestore.com/" target="_blank">Grafton Village Store</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  weston: {
      name: "Weston",
      description: `
          Weston, Vermont, is a picturesque village renowned for its historic charm and vibrant cultural scene. Nestled in the Green Mountains, Weston offers a blend of natural beauty and rich heritage that captivates both residents and visitors alike. The town is home to the famous Weston Playhouse, the oldest professional theater in Vermont, which attracts theater enthusiasts from far and wide.

          One of the standout features of Weston is the Vermont Country Store, a beloved destination that offers a nostalgic shopping experience with a wide array of traditional and unique products. The town's historic district, with its beautifully preserved buildings and quaint atmosphere, provides a glimpse into Vermont's past.

          Outdoor activities abound in Weston, with opportunities for hiking, fishing, and exploring the scenic countryside. The village green, surrounded by charming shops and cafes, is a popular spot for relaxation and community events.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.vermontcountrystore.com/" target="_blank">The Vermont Country Store</a><br/>
          <a href="https://westonplayhouse.org/" target="_blank">Weston Playhouse</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  londonderry: {
      name: "Londonderry",
      description: `
          Londonderry, Vermont, is a charming town nestled in the heart of the Green Mountains. Known for its breathtaking natural beauty and year-round recreational opportunities, Londonderry offers a perfect blend of outdoor adventure and small-town charm. The town is a gateway to several popular ski resorts, including Magic Mountain and Stratton Mountain, making it a haven for winter sports enthusiasts.

          In addition to skiing, Londonderry boasts an array of activities such as hiking, fishing, and exploring the scenic trails that wind through the area. The town is also home to the picturesque Lowell Lake State Park, a favorite spot for kayaking, picnicking, and birdwatching.

          Londonderry's vibrant community life is reflected in its local farmers' markets, unique shops, and cozy cafes. The town's rich history is preserved in its historic buildings and landmarks, providing a glimpse into its past.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.magicmtn.com/" target="_blank">Magic Mountain</a><br/>
          <a href="https://stratton.com/" target="_blank">Stratton Mountain Resort</a><br/>
          <a href="https://www.lowelllakepark.com/" target="_blank">Lowell Lake State Park</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  jamaica: {
      name: "Jamaica",
      description: `
          Jamaica, Vermont, is a quaint town celebrated for its scenic beauty and outdoor recreational opportunities. Nestled in the heart of the Green Mountains, Jamaica is a haven for nature lovers and adventure seekers. One of the town's most notable attractions is Jamaica State Park, which offers hiking, camping, and picnicking along the picturesque West River. During the fall, the park becomes a popular destination for leaf-peeping, showcasing Vermont's stunning autumn foliage.

          Jamaica's charming village features historic buildings, unique shops, and friendly cafes, making it a delightful place to explore. The town is also home to an array of cultural events and local festivals, reflecting its vibrant community spirit.

          For those seeking more adventure, the nearby Stratton Mountain Resort provides excellent skiing, snowboarding, and other winter sports.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.jamaicavt.org/jamaica-state-park/" target="_blank">Jamaica State Park</a><br/>
          <a href="https://www.stratton.com/" target="_blank">Stratton Mountain Resort</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },

  wardsboro: {
      name: "Wardsboro",
      description: `
          Wardsboro, Vermont, is a charming and tight-knit community known for its friendly atmosphere and beautiful surroundings. The town is particularly famous for the annual Gilfeather Turnip Festival, celebrating its unique local vegetable with a variety of events, food, and entertainment.

          Wardsboro is surrounded by picturesque landscapes that offer plenty of opportunities for outdoor activities such as hiking, fishing, and exploring the scenic trails. The town's historic charm is evident in its well-preserved buildings and landmarks, providing a glimpse into its rich past.

          The community spirit in Wardsboro is strong, with local events and gatherings bringing residents together. The town also offers a variety of local businesses and services, adding to its appeal as a wonderful place to live and visit.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://wardsboroyarns.com/" target="_blank">Wardsboro Yarns</a><br/>
          <a href="https://www.turnipfestival.com/" target="_blank">Gilfeather Turnip Festival</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  dover: {
      name: "Dover",
      description: `
          Dover, Vermont, is a charming town best known for being the home of Mount Snow, one of Vermont's premier ski resorts. This makes Dover a popular destination for winter sports enthusiasts, offering excellent skiing, snowboarding, and other snow-related activities. The town's beautiful surroundings also provide opportunities for year-round outdoor adventures, including hiking, mountain biking, and scenic drives.

          In addition to its outdoor attractions, Dover boasts a welcoming community with a variety of local shops, restaurants, and cultural events. The town's historic sites and picturesque landscapes add to its appeal, making it a wonderful place to visit and live.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.mountsnow.com/" target="_blank">Mount Snow Resort</a><br/>
          <a href="https://www.thehermitageclub.com/" target="_blank">The Hermitage Club</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  somerset: {
      name: "Somerset",
      description: `
          Somerset, Vermont, is a quiet and secluded town known for its pristine natural beauty and tranquil environment. It is a haven for outdoor enthusiasts, offering a range of activities such as hiking, fishing, and exploring the Somerset Reservoir. The reservoir is a peaceful spot for boating and picnicking, surrounded by lush forests and scenic views.

          Somerset's remote location makes it an ideal destination for those looking to escape the hustle and bustle of city life and reconnect with nature. The town's unspoiled landscapes provide a perfect backdrop for relaxation and adventure alike.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  stratton: {
      name: "Stratton",
      description: `
          Stratton, Vermont, is renowned for the Stratton Mountain Resort, a premier destination for skiing, snowboarding, and other winter sports. The resort's extensive trail system and modern facilities attract visitors from all over, making it a hub of activity during the winter months.

          Beyond winter sports, Stratton offers year-round outdoor adventures, including hiking, mountain biking, and golf. The scenic Stratton Mountain and the surrounding Green Mountain National Forest provide breathtaking views and numerous recreational opportunities.

          The town's vibrant community features a variety of shops, restaurants, and cultural events, making Stratton a lively place to visit and live. Its combination of natural beauty, outdoor activities, and community spirit makes Stratton a standout destination in Vermont.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.stratton.com/" target="_blank">Stratton Mountain Resort</a><br/>
          <a href="https://vermontstudiocenter.org/" target="_blank">Vermont Studio Center</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  winhall: {
      name: "Winhall",
      description: `
          Winhall, Vermont, is a picturesque town known for its close proximity to Stratton Mountain and its beautiful natural surroundings. The town is a favorite among outdoor enthusiasts, offering easy access to skiing, snowboarding, and other winter sports at Stratton Mountain Resort.

          In the warmer months, Winhall provides ample opportunities for hiking, fishing, and exploring the Green Mountain National Forest. The town's scenic beauty and peaceful environment make it an ideal location for relaxation and outdoor recreation.

          Winhall's small-town charm is complemented by a friendly community and a selection of local shops and eateries. Whether you're looking for adventure or tranquility, Winhall offers a perfect blend of both.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.stratton.com/" target="_blank">Stratton Mountain Resort</a><br/>
          <a href="https://www.winhalldeli.com/" target="_blank">Winhall Market and Deli</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  langrove: {
      name: "Langrove",
      description: `
          Langrove, Vermont, is a charming and lesser-known town that offers a peaceful retreat from the hustle and bustle of city life. Nestled in the beautiful Vermont landscape, Langrove is perfect for those who appreciate natural beauty and tranquility. The town's picturesque scenery and serene environment make it an ideal spot for relaxation and outdoor activities.

          Residents and visitors enjoy hiking, bird watching, and exploring the nearby forests and trails. The sense of community in Langrove is strong, with local events and gatherings bringing people together to celebrate the town's unique charm.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://langrovecafe.com/" target="_blank">Langrove Cafe</a><br/>
          <a href="https://langrovegrocery.com/" target="_blank">Langrove Grocery</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  sunderland: {
      name: "Sunderland",
      description: `
          Sunderland, Vermont, is a scenic town known for its stunning landscapes and outdoor recreational opportunities. The town is bordered by the Battenkill River, making it a popular destination for fishing and kayaking. Sunderland is also home to beautiful hiking trails that wind through the Green Mountain National Forest, providing breathtaking views and abundant wildlife.

          The town's rich history is reflected in its historic buildings and landmarks, offering a glimpse into Vermont's past. Sunderland is a close-knit community with a welcoming atmosphere, where local events and gatherings are a common occurrence.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://sunderlandinn.com/" target="_blank">Sunderland Inn</a><br/>
          <a href="https://battenkillcanoe.com/" target="_blank">Battenkill Canoe</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  peru: {
      name: "Peru",
      description: `
          Peru, Vermont, is a small, picturesque town nestled in the Green Mountains. Known for its stunning natural beauty and outdoor recreational opportunities, Peru is home to the popular Bromley Mountain Resort. This resort offers skiing and snowboarding in the winter and an adventure park with zip-lining, alpine slides, and mini-golf during the summer. 

          The town's charming village center features historic buildings, local shops, and cozy inns, providing a welcoming atmosphere for visitors and residents alike. Peru is also known for its beautiful hiking trails, including sections of the Appalachian Trail, which offer breathtaking views of the surrounding mountains and valleys.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.bromley.com/" target="_blank">Bromley Mountain Resort</a><br/>
          <a href="https://jjhapgood.com/" target="_blank">JJ Hapgood General Store & Eatery</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  mttabor: {
      name: "Mount Tabor",
      description: `
          Mount Tabor, Vermont, is a tranquil town located within the Green Mountain National Forest. Known for its breathtaking natural scenery, Mount Tabor offers numerous outdoor activities, including hiking, camping, and wildlife watching. The town is home to some of the most scenic trails in Vermont, such as the Long Trail and the Appalachian Trail, which traverse the lush forests and provide stunning views of the mountains.

          The area's rich history and geological features add to its charm, making it a fascinating destination for nature enthusiasts and history buffs alike. Mount Tabor's serene environment and beautiful landscapes make it an ideal spot for those looking to escape the hustle and bustle of everyday life and immerse themselves in nature.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          <a href="https://www.greenmountainclub.org/" target="_blank">Green Mountain Club</a><br/>
          <a href="https://www.fs.usda.gov/greenmountain" target="_blank">Green Mountain National Forest</a><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },
  glastonbury: {
      name: "Glastonbury",
      description: `
          Glastonbury, Vermont, is one of the state's most intriguing and mysterious towns. Established in the early 19th century, Glastonbury was once a bustling logging community. However, by the early 20th century, the town was largely abandoned due to declining industry and harsh living conditions. Today, it is known as a ghost town, with a population of less than ten people.

          The town's history is filled with tales of unexplained disappearances and eerie occurrences, adding to its mystique. Glastonbury is surrounded by the Green Mountain National Forest, offering a remote and rugged landscape perfect for adventurous hikers and explorers. The area is also rich in wildlife, making it an excellent spot for bird watching and nature photography.

          <br/><br/><span class="local-businesses">Local Businesses:</span><br/>
          Thomas Auto Repair: <a href="tel:+18026459122">+1 (802) 645-9122</a>
      `,
  },

};

const RealEstateMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClick = (event) => {
    const townId = event.target.id;
    console.log('Town clicked:', townId);
    if (townInfo[townId]) {
      setModalContent(townInfo[townId]);
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <h1>Real Estate Map</h1>
      <div onClick={handleClick}>
        <MapSVG />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent && (
          <div>
            <h2>{modalContent.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: modalContent.description }}></p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RealEstateMap;