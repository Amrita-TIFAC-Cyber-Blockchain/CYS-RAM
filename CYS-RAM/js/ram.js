function openTab(tabName) {
    var i, tabContent;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    document.querySelectorAll('button').forEach(function(tabButton) {
      tabButton.classList.remove('active-tab');
    });
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add('active-tab');
    
  } 
  function show_hide(x) {
    x.classList.toggle("change");
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') ? 'block' : 'none';
}


const array_ofGsid = ['Xl_P9V0AAAAJ','nlt0DD4AAAAJ','K2n1nh0AAAAJ','8AwtAWsAAAAJ','NHVcW84AAAAJ','QdXcVjUAAAAJ','-DjvKqgAAAAJ','ZWxL_tkAAAAJ','k9PlyYkAAAAJ','LZW1iBEAAAAJ','ajH378EAAAAJ']
  function check(gsid) {
    for (let i = 0; i < 11; i++) {
      if (array_ofGsid[i] == gsid) {
        return i;
      }
    }
    return -1
  }

const faculty = ['Dr. M. Sethumadhavan','Dr. Chungath Srinivasan','Dr. Lakshmy K.V','Dr. Amritha P P','Dr. Praveen K','Mr. Saurabh Shrivastava','Mr. Ramaguru Radhakrishnan','Dr. K.N. Ambili','Mr. Anand R Nair','Dr. V. Sujitha','Ms. Hemalatha P'];
const faculty_publications = [20,20,20,20,20,3,14,10,1,20,20];
const faculty_citations = [1243,226,249,324,180,2,95,63,4,51,158];
const faculty_h_index = [13,8,8,9,7,1,5,4,1,4,7];
const faculty_i10_index = [19,5,6,7,5,0,4,2,0,1,6];

function generateOutputHTML(index) {
  var author = faculty[index];
  var publications = faculty_publications[index];
  var citations_c = faculty_citations[index];
  var hindex_c = faculty_h_index[index];
  var i10index_c = faculty_i10_index[index];

  return `
    <center style="margin-top:60px;">
      <table style="border-style:solid;border-width:4px;">
        <tr style="border-style:solid; border-width:4px;"><th colspan="3">Author Information</th></tr>
        <td><b>Name : </b></td>
        <td style="text-align:center;">${author}</td>
        <tr style="border-style:solid; border-width:4px;"><th colspan="3">Publication Details</th></tr>
        <td><b>Publications : </b></td>
        <td style="text-align:center;">${publications}</td>
        </tr>
        <td><b>Citations: </b></td>
        <td style="text-align:center;">${citations_c}</td>
        </tr>
        </tr>
        <td><b>h-index : </b></td>
        <td style="text-align:center;">${hindex_c}</td>
        </tr>
        </tr>
        <td><b>i10-index:</b></td>
        <td style="text-align:center;">${i10index_c}</td>
      </table>
    </center>`;
}

function checkeventbyID(event) {
  alert(`Submitted Successfully!`);
  const enteredId = document.getElementById('Search_by_Id').value;
  console.log(enteredId);
  var index = check(enteredId);

  if (index !== -1) {
    var outputHTML = generateOutputHTML(index);
    var output = document.getElementById('output');
    var ramImagesDiv = document.querySelector('.ram_images');
    if (ramImagesDiv) {
      ramImagesDiv.style.display = 'none';
    }
    output.innerHTML = outputHTML;
  } else {
    var ramImagesDiv = document.querySelector('.ram_images');
    if (ramImagesDiv) {
      ramImagesDiv.style.display = 'block';
    }
  }

  event.preventDefault();
  return false;
}



