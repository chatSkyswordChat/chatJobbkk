var userLeft = "";
userLeft += `
<article class="clWhite borderRadiusStyle p-3 mb-3">
    <div class="flexPic mb-3">
        <div>
            <figure class="mb-2"><img src="images/pic.jpg" alt=""></figure>
            <label class="upImage" for="inputUpload">
                <p><i class="fas fa-camera" aria-hidden="true"></i> <span id="changeText">เลือกรูป</span></p>              
                <input type="file" size="60" id="inputUpload">
            </label>
            <p class="fontSubHead">Chatthong Hongwisuthikul</p>
        </div>

        <div class="lineDashUrgent"></div>

        <div class="mb-3">
            <p class="fontSubHead textGreen">Resume Score</p>
            <div class="progress progressScore">
                <div class="progress-bar progressGreen" role="progressbar"
                    style="width: 85%;" aria-valuenow="85" aria-valuemin="0"
                    aria-valuemax="100">85%</div>
            </div>
        </div>

        <div class="flexInterview mb-3">
            <div>
                <a href="javascript:void(0)" onclick="link()">
                    <h6 class="fontHead textRed">75</h6>
                    <p>นัดสัมภาษณ์</p>
                </a>
            </div>

            <div>
                <a href="javascript:void(0)" onclick="link()">
                    <h6 class="fontHead textRed">150</h6>
                    <p>งานที่บันทึก</p>
                </a>
            </div>
        </div>

        <div class="fullProfile">
            <a href="previewJobSeeker.html">ดูโปรไฟล์แบบเต็ม</a>
        </div>
    </div>                                   
</article>`;

document.getElementById("usageJs").innerHTML = userLeft;

const changeText = document.querySelector('#changeText'),
    inputUpload = document.querySelector('#inputUpload');

inputUpload.addEventListener('change', () => {
    let input = inputUpload.files[0];
    let text;
    if (input) {
        text = inputUpload.value.replace(/^.*\\/, "")
    } else {
        text = 'กรุณาเลือกรูป'
    }
    changeText.innerHTML = text
})
