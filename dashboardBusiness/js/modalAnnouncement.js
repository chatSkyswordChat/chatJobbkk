let modalAnnouncement = ''

modalAnnouncement += `<div class="modal fade" id="modalAnnouncement" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modalDialog">
  <div class="modal-content modalContent">
    <div class="modal-header">
        <div class="flexHeadModal">
            <h2 class="fontSubHead textWhite lineH">ตัวอย่างประกาศงานด้านล่าง ท่านสามารถ <span>copy</span> 
                <br>ลงในประกาศงานของท่านได้โดยการกดปุ่ม <span class="spanCopy">copy ไปยังประกาศงาน</span>
            </h2>
        </div>
        <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
        </button>
    </div>

    <div class="modal-body">
        <div>
            <h6 class="fontSubHead textRed mb-3">คุณสมบัติด้านความรู้และความสามารถ</h6>
            <article>
                <div class="gridCopy">
                    <p>1.</p>
                    <p><span class="font-weight-bold">เพศ :</span> ชาย , หญิง</p>
                </div>

                <div class="gridCopy">
                    <p>2.</p>
                    <p><span class="font-weight-bold">อายุ(ปี) :</span> 25 - 35</p>
                </div>

                <div class="gridCopy">
                    <p>3.</p>
                    <p><span class="font-weight-bold">ระดับการศึกษา :</span> ปวส. - ปริญญาตรี</p>
                </div>

                <div class="gridCopy">
                    <p>4.</p>
                    <p><span class="font-weight-bold">ประสบการณ์(ปี) :</span> 2ปีขึ้นไป</p>
                </div>

                <div class="gridCopy">
                    <p>5.</p>
                    <p><span class="font-weight-bold">เพศ :</span> ชาย , หญิง</p>
                </div>

                <div class="gridCopy">
                    <p>6.</p>
                    <p><span class="font-weight-bold">อายุ(ปี) :</span> 25 - 35</p>
                </div>

                <div class="gridCopy">
                    <p>7.</p>
                    <p><span class="font-weight-bold">ระดับการศึกษา :</span> ปวส. - ปริญญาตรี</p>
                </div>

                <div class="gridCopy">
                    <p>8.</p>
                    <p><span class="font-weight-bold">ประสบการณ์(ปี) :</span> 2ปีขึ้นไป</p>
                </div>

                <div class="gridCopy">
                    <p>9.</p>
                    <p><span class="font-weight-bold">เพศ :</span> ชาย , หญิง</p>
                </div>

                <div class="gridCopy">
                    <p>10.</p>
                    <p><span class="font-weight-bold">อายุ(ปี) :</span> 25 - 35</p>
                </div>
            </article>
        </div>

        <div class="lineDashUrgent"></div>

        <div>
            <h6 class="fontSubHead textRed mb-3">คุณสมบัติผู้สมัครงานเพิ่มเติม</h6>
            <article>
                <div class="gridCopy">
                    <p>1.</p>
                    <p>ตรวจสอบความถูกต้องในการขายประกันจากฝ่ายขาย ให้ถูกต้องตามมาตรฐาน</p>
                </div>

                <div class="gridCopy">
                    <p>2.</p>
                    <p>ตรวจสอบบทสนทนาระหว่างลูกค้าและเจ้าหน้าที่ฝ่ายขาย</p>
                </div>

                <div class="gridCopy">
                    <p>3.</p>
                    <p>รายงานความผิดปกติต่อหัวหน้างาน</p>
                </div>

                <div class="gridCopy">
                    <p>4.</p>
                    <p>ให้คำแนะนำ, ข้อมูลเพื่อการปรับปรุงการทำงานของพนักงานขายและบริษัทฯ</p>
                </div>

                <div class="gridCopy">
                    <p>5.</p>
                    <p>ตรวจสอบความถูกต้องในการขายประกันจากฝ่ายขาย ให้ถูกต้องตามมาตรฐาน</p>
                </div>

                <div class="gridCopy">
                    <p>6.</p>
                    <p>ตรวจสอบบทสนทนาระหว่างลูกค้าและเจ้าหน้าที่ฝ่ายขาย</p>
                </div>

                <div class="gridCopy">
                    <p>7.</p>
                    <p>รายงานความผิดปกติต่อหัวหน้างาน</p>
                </div>

                <div class="gridCopy">
                    <p>8.</p>
                    <p>ให้คำแนะนำ, ข้อมูลเพื่อการปรับปรุงการทำงานของพนักงานขายและบริษัทฯ</p>
                </div>

                <div class="gridCopy">
                    <p>9.</p>
                    <p>ตรวจสอบความถูกต้องในการขายประกันจากฝ่ายขาย ให้ถูกต้องตามมาตรฐาน</p>
                </div>

                <div class="gridCopy">
                    <p>10.</p>
                    <p>ตรวจสอบบทสนทนาระหว่างลูกค้าและเจ้าหน้าที่ฝ่ายขาย</p>
                </div>
            </article>
        </div>
    </div>

    <div class="modal-footer modalFooter">
        <p class="text-center textRed">หลัง copy ประกาศงานท่านสามารถแก้ไขข้อความได้ตามปกติ</p>
        <button class="btnCopy" type="button" data-dismiss="modal">copy ไปยังประกาศงาน</button>
    </div>

  </div>
</div>
</div>`

document.querySelector('.modalAnnouncement').innerHTML = modalAnnouncement

