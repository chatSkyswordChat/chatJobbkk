let applyNow = ''

applyNow += `
<div class="modal fade close_modal" id="modalApplyNow" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modalDialog">
        <div class="modal-content modalContent">
            <div class="modal-header">
                <div class="flexHeadModal">
                    <h2 class="fontSubHead textWhite lineH">สมัครงาน</h2>
                </div>
                <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                </button>
            </div>

            <div class="modal-body">
                <p class="mb-3">กรุณากดปุ่ม <span class="textRed">ยืนยัน</span> เพื่อสมัครตำแหน่งงานที่คุณต้องการค่ะ 
                    แต่หากคุณต้องการสร้างเรซูเม่ใหม่หรือไม่มีเรซูเม่ในการสมัครตำแหน่งงาน ให้กดปุ่ม <span class="textRed">สร้างเรซูเม่</span> ค่ะ
                </p>

                <div class="table-responsive mb-3">
                    <table class="table table-striped table-bordered table-hover tableList">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">ใบสมัครงาน</th>
                                <th scope="col">วันที่สร้าง</th>
                                <th scope="col">วันที่อัพเดท</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center"><input type="checkbox" /></td>
                                <td>Software Developer</td>
                                <td>30 ม.ค. 2021</td>
                                <td>30 ม.ค. 2022</td>
                            </tr>
                            <tr>
                                <td class="text-center"><input type="checkbox" /></td>
                                <td>Graphic Designer</td>
                                <td>30 ม.ค. 2021</td>
                                <td>30 ม.ค. 2022</td>
                            </tr>
                            <tr>
                                <td class="text-center"><input type="checkbox" /></td>
                                <td>Web Designer</td>
                                <td>30 ม.ค. 2021</td>
                                <td>30 ม.ค. 2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flexBetween">
                    <button type="button" class="btn_red modalLang">สร้างเรซูเม่</button>
                    <label><input type="checkbox" /> ส่งสำเนาเข้าอีเมลของฉัน</label>
                </div>

                <div class="lineDash"></div>

                <p class="name">เมื่อคุณคลิก <span class="textRed">"ยืนยัน"</span> จะเป็นการยืนยันว่า 
                    ข้อมูลส่วนตัวของคุณทั้งที่อยู่ในใบสมัครงานและในโปรไฟล์จะสามารถเข้าถึงได้โดยบริษัท 
                    <span class="textRed">สยามกัลฟ์ปิโตรเคมีคัล จำกัด</span> และทางเว็บไซต์ 
                    โดยการใช้งานจะเป็นไปตามนโยบายข้อมูลส่วนบุคคลที่ระบุอยู่ใน
                    <a href="">คำชี้แจงสิทธิส่วนบุคคล</a>
                </p>

                <div class="lineDash"></div>

                <p class="name">ใบสมัครงานของคุณจะถูกส่งตรงไปยัง <span class="textRed">สยามกัลฟ์ปิโตรเคมีคัล จำกัด</span> 
                    โปรดระวังประกาศงานเท็จเพื่อเรียกเก็บเงินจากคุณโดยมิชอบด้วยกฎหมาย 
                    ผู้ประกอบการไม่ควรขอให้คุณชำระเงินเพื่อสมัครงาน ดังนั้น 
                    โปรดอย่าให้รายละเอียดบัญชีธนาคารหรือบัตรเครดิตของคุณกับผู้ประกอบการใด ๆ โดยเด็ดขาด 
                    การลงประกาศงานเท็จเป็นการฝ่าฝืนเงื่อนไขการใช้งานของ <span class="textRed">JOBBKK</span> 
                    หากพบเห็นประกาศงานลักษณะดังกล่าว โปรดแจ้งมาที่ <a href="">sales@jobbkk.com</a>
                </p>
            </div>

            <div class="modal-footer modalFooter flexFooter">
                <button class="btn_red successApply" type="button">ยืนยัน</button>
                <button class="btn_white" type="button" data-dismiss="modal">ยกเลิก</button>
            </div>
        </div>
    </div>
</div>`

document.querySelector('.modalApplyNow').innerHTML = applyNow

