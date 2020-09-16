var userLeft = ''
userLeft += `<article class="clWhite borderRadiusStyle p-3 mb-3">
                                    <div class="flexPic mb-3">
                                        <div>
                                            <figure class="mb-2"><img src="images/pic.jpg" alt=""></figure>
                                            <label class="upImage"><i class="fas fa-camera" aria-hidden="true"></i>
                                                เลือกรูป
                                                <input type="file" size="60">
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
                                            <a href="#">ดูโปรไฟล์แบบเต็ม</a>
                                        </div>
                                    </div>
                                </article>

                                <article class="clWhite borderRadiusStyle p-3 mb-3">
                                    <a class="flexContent" href="javascript:void(0)" onclick="link()">
                                        <figure class="borderStyle"><img src="images/new7.jpg" alt=""></figure>
                                        <p class="cutCut">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Repellendus, quaerat vitae nisi ipsum rerum, quam sit magni praesentium,
                                            minima quia vero? Aut eum debitis animi temporibus? Blanditiis eos ducimus
                                            cupiditate?</p>
                                        <div class="text-right readNews">
                                            <p href="javascript:void(0)" onclick="link()">อ่านต่อ</p>
                                        </div>
                                    </a>
                                </article>`

document.getElementById('usageJs').innerHTML = userLeft