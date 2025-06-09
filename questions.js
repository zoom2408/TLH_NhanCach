const allQuestions = [
  // Nhân cách (Personality) - Tâm lý học 
  {
    q: "Nhân cách (personality) theo định nghĩa tâm lý học là gì?",
    opts: [
      "Một đặc điểm sinh học di truyền",
      "Khuôn mẫu đặc điểm suy nghĩ, cảm xúc và hành vi nhất quán của một cá nhân",
      "Tổng số hành vi mà cá nhân thực hiện trong đời",
      "Những phẩm chất do môi trường tạo nên"
    ],
    ans: 1,
    explain: "Nhân cách là khuôn mẫu các đặc điểm về suy nghĩ, cảm xúc và hành vi tạo nên tính cá nhân và nhất quán của một người."
  },
  {
    q: "Theo Freud, cấu trúc nhân cách gồm mấy thành phần cơ bản?",
    opts: [
      "2 thành phần: Cái tôi và Bản ngã",
      "3 thành phần: Id, Ego, Superego",
      "4 thành phần: Ý thức, tiền ý thức, vô thức, bản năng",
      "2 thành phần: Bản năng và lý trí"
    ],
    ans: 1,
    explain: "Freud cho rằng nhân cách gồm 3 thành phần: Id (cái ấy), Ego (cái tôi) và Superego (cái siêu tôi)."
  },
  {
    q: "Id (cái ấy) theo Freud vận hành theo nguyên tắc nào?",
    opts: [
      "Nguyên tắc đạo đức",
      "Nguyên tắc hiện thực",
      "Nguyên tắc khoái lạc",
      "Nguyên tắc xã hội"
    ],
    ans: 2,
    explain: "Id vận hành theo nguyên tắc khoái lạc, luôn muốn thỏa mãn nhu cầu ngay lập tức."
  },
  {
    q: "Theo Erik Erikson, sự phát triển nhân cách diễn ra qua mấy giai đoạn chính?",
    opts: [
      "5 giai đoạn",
      "8 giai đoạn",
      "3 giai đoạn",
      "10 giai đoạn"
    ],
    ans: 1,
    explain: "Thuyết Erikson nhấn mạnh 8 giai đoạn phát triển tâm lý xã hội từ sơ sinh đến già."
  },
  {
    q: "Khủng hoảng tâm lý xã hội đầu tiên của Erikson là gì?",
    opts: [
      "Tự trị vs. Xấu hổ/Nghi ngờ",
      "Tin tưởng vs. Mất lòng tin",
      "Gắn bó vs. Cô lập",
      "Khởi xướng vs. Mặc cảm tội lỗi"
    ],
    ans: 1,
    explain: "Giai đoạn đầu tiên là Tin tưởng vs. Mất lòng tin, quyết định bởi sự chăm sóc của người nuôi dưỡng."
  },
  {
    q: "Thang bậc nhu cầu của Maslow có bao nhiêu tầng chính?",
    opts: [
      "3 tầng",
      "4 tầng",
      "5 tầng",
      "6 tầng"
    ],
    ans: 2,
    explain: "Maslow xây dựng tháp nhu cầu gồm 5 tầng từ nhu cầu cơ bản đến nhu cầu hiện thực hóa bản thân."
  },
  {
    q: "Theo Maslow, nhu cầu nào cần được thỏa mãn trước?",
    opts: [
      "Nhu cầu tự trọng",
      "Nhu cầu thể lý (ăn, uống, ngủ...)",
      "Nhu cầu thuộc về",
      "Nhu cầu thẩm mỹ"
    ],
    ans: 1,
    explain: "Nhu cầu thể lý (ăn, uống, ngủ...) là cơ bản và cần thỏa mãn trước các nhu cầu cao hơn."
  },
  {
    q: "Theo Carl Rogers, yếu tố nào không phải là điều kiện cần để giúp con người phát triển tối ưu?",
    opts: [
      "Thấu cảm",
      "Trừng phạt",
      "Chân thật (congruence)",
      "Quan tâm tích cực vô điều kiện"
    ],
    ans: 1,
    explain: "Rogers nhấn mạnh 3 điều kiện cần: thấu cảm, chân thật, quan tâm tích cực vô điều kiện. Trừng phạt không phải là yếu tố phát triển tối ưu."
  },
  {
    q: "Trong học thuyết của Carl Jung, vô thức tập thể (collective unconscious) chứa đựng điều gì?",
    opts: [
      "Ký ức tuổi thơ cá nhân",
      "Những nguyên mẫu (archetype) di truyền của nhân loại",
      "Các trải nghiệm ý thức",
      "Ký ức bị dồn nén"
    ],
    ans: 1,
    explain: "Vô thức tập thể chứa các nguyên mẫu – mô hình tâm lý được di truyền và chung cho nhân loại."
  },
  {
    q: "Nguyên mẫu Shadow (Bóng tối) của Jung là gì?",
    opts: [
      "Mặt xã hội của bản thân",
      "Tổng hợp những phẩm chất tiêu cực mà ta không muốn thừa nhận",
      "Hình ảnh lý tưởng về bản thân",
      "Khía cạnh lý trí và đạo đức"
    ],
    ans: 1,
    explain: "Shadow là tập hợp những đặc tính mà cá nhân cố gắng che giấu, bao gồm cả tiêu cực và đôi khi là tiềm năng sáng tạo."
  },
  {
    q: "Theo Adler, động lực cơ bản của con người là gì?",
    opts: [
      "Tìm kiếm khoái lạc",
      "Phấn đấu để vượt trội hoặc thành công",
      "Thỏa mãn các nhu cầu sinh lý",
      "Tránh né đau khổ"
    ],
    ans: 1,
    explain: "Adler cho rằng động lực chính là sự phấn đấu để vượt trội hoặc đạt được thành công nhằm bù trừ cho cảm giác tự ti."
  },
  {
    q: "Cảm thức cộng đồng trong học thuyết của Adler là gì?",
    opts: [
      "Khả năng hợp tác, quan tâm đến lợi ích xã hội",
      "Tính cá nhân mạnh mẽ",
      "Khả năng thích nghi với gia đình",
      "Ý chí tự do cá nhân"
    ],
    ans: 0,
    explain: "Cảm thức cộng đồng là khả năng cảm thông, hợp tác, quan tâm tới người khác – thước đo sức khỏe tinh thần."
  },
  {
    q: "Theo học thuyết hành vi, nhân cách hình thành chủ yếu qua gì?",
    opts: [
      "Di truyền",
      "Trải nghiệm và học tập từ môi trường",
      "Suy nghĩ tích cực",
      "Các giá trị tôn giáo"
    ],
    ans: 1,
    explain: "Học thuyết hành vi xem nhân cách là kết quả của quá trình học tập, điều kiện hóa và củng cố từ môi trường."
  },
  {
    q: "Khái niệm 'điều kiện hóa cổ điển' (classical conditioning) gắn với nhà khoa học nào?",
    opts: [
      "John B. Watson",
      "Carl Rogers",
      "Ivan Pavlov",
      "Albert Bandura"
    ],
    ans: 2,
    explain: "Ivan Pavlov là người nghiên cứu điều kiện hóa cổ điển qua thí nghiệm với chó."
  },
  {
    q: "Khái niệm 'học tập xã hội' (social learning) nhấn mạnh vai trò của gì?",
    opts: [
      "Di truyền",
      "Trừng phạt",
      "Quan sát và bắt chước người khác",
      "Trải nghiệm tuổi thơ"
    ],
    ans: 2,
    explain: "Học tập xã hội nhấn mạnh quá trình học qua quan sát, bắt chước hành vi của người khác (Albert Bandura)."
  },
  {
    q: "Theo Freud, cơ chế phòng vệ là gì?",
    opts: [
      "Phản ứng có ý thức khi gặp nguy hiểm",
      "Chiến lược vô thức của Ego nhằm giảm lo âu, bảo vệ bản thân",
      "Cách đối phó của Superego với Id",
      "Một loại hành vi thích nghi xã hội"
    ],
    ans: 1,
    explain: "Cơ chế phòng vệ là chiến lược vô thức của Ego giúp giảm lo âu và bảo vệ cá nhân khỏi xung đột tâm lý."
  },
  {
    q: "Theo Rogers, điều gì xảy ra khi trải nghiệm thực tế và self-concept không hòa hợp?",
    opts: [
      "Lo âu và phản ứng phòng vệ xuất hiện",
      "Cá nhân phát triển tốt hơn",
      "Tự trọng tăng lên",
      "Quan tâm tích cực vô điều kiện xuất hiện"
    ],
    ans: 0,
    explain: "Khi self-concept và trải nghiệm không hòa hợp, cá nhân dễ sinh lo âu và phát triển phản ứng phòng vệ."
  },
  {
    q: "Thứ tự sinh trong gia đình (theo Adler) có ảnh hưởng gì tới nhân cách?",
    opts: [
      "Không ảnh hưởng",
      "Ảnh hưởng đến phong cách sống và các đặc điểm nhân cách",
      "Chỉ ảnh hưởng đến học tập",
      "Chỉ ảnh hưởng đến sức khỏe thể chất"
    ],
    ans: 1,
    explain: "Adler cho rằng thứ tự sinh (con cả, con giữa, con út, con một) ảnh hưởng tới cách ứng xử và phát triển nhân cách."
  },
  {
    q: "Theo Freud, cắm chốt (fixation) trong các giai đoạn phát triển tâm-tính dục dẫn đến?",
    opts: [
      "Nhân cách cứng nhắc và các vấn đề tâm lý sau này",
      "Sự phát triển trí tuệ vượt trội",
      "Quan hệ xã hội rộng",
      "Khả năng tự trị tốt hơn"
    ],
    ans: 0,
    explain: "Cắm chốt ở một giai đoạn phát triển làm nhân cách cứng nhắc, dễ gặp rối loạn tâm lý khi trưởng thành."
  },
  {
    q: "Tóm tắt, điểm chung của các học thuyết nhân cách là gì?",
    opts: [
      "Mỗi học thuyết đưa ra một góc nhìn khác nhau về con người, không có học thuyết nào là toàn năng",
      "Chỉ học thuyết Freud là đúng",
      "Chỉ học thuyết hành vi là đúng",
      "Tất cả đều phủ nhận vai trò của môi trường"
    ],
    ans: 0,
    explain: "Các học thuyết nhân cách bổ sung lẫn nhau, mỗi lý thuyết giải thích một khía cạnh, không có học thuyết nào là toàn năng."
  },
  // Các câu hỏi khác về nâng cao nhận thức và kỹ năng sống
  {
    q: "Trong một ca lâm sàng, thân chủ luôn đổ lỗi cho người khác về thất bại của mình. Theo Freud, đây là cơ chế phòng vệ nào?",
    opts: [
      "Dồn nén",
      "Phóng chiếu",
      "Thoái lui",
      "Chuyển di"
    ],
    ans: 1,
    explain: "Phóng chiếu là khi cá nhân gán các đặc điểm hoặc cảm xúc không chấp nhận được của bản thân cho người khác."
  },
  {
    q: "Một bệnh nhân luôn lý giải việc đi trễ là do kẹt xe, mặc dù nguyên nhân thật là không muốn đi làm. Cơ chế phòng vệ nào thể hiện ở đây?",
    opts: [
      "Lý trí hóa (rationalization)",
      "Dồn nén (repression)",
      "Phóng chiếu (projection)",
      "Thăng hoa (sublimation)"
    ],
    ans: 0,
    explain: "Lý trí hóa là giải thích một hành vi không thể chấp nhận được bằng lý do nghe có vẻ hợp lý, tránh đối mặt với động cơ thực."
  },
  {
    q: "Trong liệu pháp thân chủ trọng tâm của Rogers, yếu tố nào quan trọng nhất giúp thân chủ thay đổi tích cực?",
    opts: [
      "Phán xét đúng sai của nhà trị liệu",
      "Truy vấn mạnh mẽ",
      "Quan tâm tích cực vô điều kiện",
      "Đưa ra lời khuyên liên tục"
    ],
    ans: 2,
    explain: "Quan tâm tích cực vô điều kiện là thái độ nền tảng giúp thân chủ cảm thấy được chấp nhận và an toàn để khám phá bản thân."
  },
  {
    q: "Một trẻ em bị căng thẳng do sắp có em, bỗng nhiên lại đòi bú bình như hồi nhỏ. Đây là hiện tượng gì?",
    opts: [
      "Dồn nén",
      "Thoái lui",
      "Hình thành phản ứng",
      "Phủ nhận"
    ],
    ans: 1,
    explain: "Thoái lui là quay lại hành vi của giai đoạn phát triển trước khi đối diện stress hoặc lo âu."
  },
  {
    q: "Kỹ thuật nào thường được sử dụng trong phân tâm học để tiếp cận vô thức của thân chủ?",
    opts: [
      "Phỏng vấn hành vi",
      "Liên tưởng tự do",
      "Thang đo trắc nghiệm khách quan",
      "Phản hồi sinh học"
    ],
    ans: 1,
    explain: "Liên tưởng tự do cho phép thân chủ nói tự do những gì xuất hiện trong tâm trí, giúp nhà trị liệu phát hiện các xung năng vô thức."
  },
  {
    q: "Khi thân chủ mô tả giấc mơ có nhiều hình ảnh lặp lại, nhà trị liệu Jung sẽ quan tâm đến yếu tố nào?",
    opts: [
      "Các nguyên mẫu (archetype)",
      "Điều kiện hóa",
      "Mức độ củng cố",
      "Hành vi quan sát"
    ],
    ans: 0,
    explain: "Jung chú trọng giải mã các nguyên mẫu xuất hiện trong giấc mơ vì đây là biểu hiện của vô thức tập thể."
  },
  {
    q: "Liệu pháp hành vi áp dụng kỹ thuật nào để giúp trị liệu chứng ám sợ (phobia)?",
    opts: [
      "Giải thích giấc mơ",
      "Tiếp xúc hệ thống (systematic desensitization)",
      "Phân tích bản ngã",
      "Vai trò nhóm"
    ],
    ans: 1,
    explain: "Tiếp xúc hệ thống là kỹ thuật giúp dần dần làm quen với đối tượng gây sợ, từ đó giảm dần cảm xúc sợ hãi."
  },
  {
    q: "Case: Một thân chủ liên tục hoài nghi bản thân và né tránh các cơ hội mới. Theo Adler, cần đánh giá yếu tố nào trước tiên?",
    opts: [
      "Cảm giác tự ti và cách bù trừ",
      "Ý nghĩa của giấc mơ",
      "Quan sát hành vi",
      "Kiểm tra sự hòa hợp của self"
    ],
    ans: 0,
    explain: "Adler nhấn mạnh cảm giác tự ti và động lực bù trừ là trung tâm hình thành nhân cách, cần được khám phá đầu tiên."
  },
  {
    q: "Một sinh viên sắp tốt nghiệp, do lo lắng về tương lai nên bắt đầu nghiện game và trì hoãn làm luận văn. Theo Erikson, đây là khủng hoảng của giai đoạn nào?",
    opts: [
      "Tin tưởng vs. Mất lòng tin",
      "Gắn bó vs. Cô lập",
      "Cảm nhận bản dạng vs. Bối rối bản dạng",
      "Tạo tác vs. Trì trệ"
    ],
    ans: 2,
    explain: "Giai đoạn vị thành niên/trưởng thành trẻ là lúc hình thành bản dạng cá nhân, dễ bối rối khi đối diện với chuyển tiếp lớn."
  },
  {
    q: "Trong trị liệu tâm lý, đánh giá 'tính hòa hợp' (congruence) giữa self-concept và trải nghiệm thực có ý nghĩa gì?",
    opts: [
      "Đánh giá sự thành thật với bản thân của thân chủ",
      "Kiểm tra trí nhớ",
      "Đo động lực học tập",
      "Phân biệt các phong cách sống"
    ],
    ans: 0,
    explain: "Tính hòa hợp thể hiện mức độ self-concept phản ánh đúng thực tế trải nghiệm, là chỉ báo sức khỏe tâm lý theo Rogers."
  },
  {
    q: "Trắc nghiệm nào dưới đây KHÔNG phải là phương pháp đo lường gián tiếp (projective test) trong tâm lý học nhân cách?",
    opts: [
      "Rorschach inkblot test",
      "Thematic Apperception Test (TAT)",
      "Trắc nghiệm Big Five",
      "Test vẽ người"
    ],
    ans: 2,
    explain: "Big Five là trắc nghiệm khách quan, còn các phương pháp kia là đo lường gián tiếp dựa trên sự diễn giải tự do."
  },
  {
    q: "Case: Một người trưởng thành rất sợ bị chỉ trích, thường 'đi trước một bước' để tự chê trách mình trước khi người khác làm điều đó. Cơ chế phòng vệ nào có thể liên quan?",
    opts: [
      "Hình thành phản ứng (reaction formation)",
      "Phóng chiếu",
      "Chuyển di",
      "Dồn nén"
    ],
    ans: 0,
    explain: "Hình thành phản ứng là hành vi thể hiện cảm xúc/đặc điểm đối lập với cảm xúc thật bị dồn nén."
  },
  {
    q: "Trong các liệu pháp nhân vị trọng tâm, kỹ thuật phản chiếu (reflection) có mục đích gì?",
    opts: [
      "Làm thân chủ cảm thấy được lắng nghe và hiểu",
      "Phân tích logic hành vi",
      "Đưa ra nhận xét chuyên môn",
      "Dẫn dắt thân chủ nhận lỗi"
    ],
    ans: 0,
    explain: "Phản chiếu giúp thân chủ nhận ra cảm xúc, thúc đẩy sự tự nhận thức và cảm giác được đồng cảm."
  },
  {
    q: "Một nhà trị liệu giúp thân chủ nhận diện và đối diện với Shadow (Bóng tối) theo cách tiếp cận của Jung. Đây là mục tiêu của tiến trình gì?",
    opts: [
      "Đồng nhất hóa bản ngã",
      "Thống hợp cá nhân (individuation)",
      "Thăng hoa",
      "Phân tích hành vi"
    ],
    ans: 1,
    explain: "Thống hợp cá nhân là quá trình hợp nhất các phần vô thức và ý thức, giúp cá nhân phát triển toàn diện."
  },
  {
    q: "Case: Thân chủ kể rằng thường mơ thấy bị mất kiểm soát, ngã vào bóng tối. Nhà trị liệu nên chú ý điều gì khi phân tích giấc mơ theo Freud?",
    opts: [
      "Nội dung tiềm ẩn (latent content) của giấc mơ",
      "Hành vi quan sát",
      "Mức độ tuân thủ luật lệ",
      "Ý nghĩa thực tế"
    ],
    ans: 0,
    explain: "Freud quan tâm đến nội dung tiềm ẩn trong giấc mơ, là những xung năng bị dồn nén xuất hiện qua biểu tượng."
  },
  {
    q: "Một người thành đạt nhưng liên tục cảm thấy không hài lòng, không biết mục tiêu sống là gì. Theo Maslow, đây có thể là biểu hiện của gì?",
    opts: [
      "Thiếu nhu cầu an toàn",
      "Khủng hoảng bản dạng",
      "Thiếu sự hiện thực hóa bản thân (self-actualization)",
      "Thiếu thốn tình cảm"
    ],
    ans: 2,
    explain: "Theo Maslow, khi không cảm thấy ý nghĩa dù đã có thành tựu, cá nhân có thể chưa đạt đến mức hiện thực hóa bản thân."
  },
  {
    q: "Trong tâm lý học cá nhân của Adler, phương pháp lượng giá 'hồi ức tuổi thơ' có ý nghĩa gì?",
    opts: [
      "Xác định các yếu tố di truyền",
      "Tìm hiểu về phong cách sống hiện tại qua cách diễn giải ký ức",
      "Đo chỉ số IQ",
      "Phân tích cấu trúc gia đình"
    ],
    ans: 1,
    explain: "Adler tin rằng cách ta nhớ và diễn giải ký ức tuổi thơ phản ánh phong cách sống và vấn đề hiện tại."
  },
  {
    q: "Trị liệu nhận thức-hành vi (CBT) khác với phân tâm học ở điểm nào?",
    opts: [
      "Tập trung vào quá khứ và vô thức",
      "Nhấn mạnh thay đổi tư duy, hành vi ở hiện tại",
      "Giải thích giấc mơ",
      "Sử dụng phân tích tự do"
    ],
    ans: 1,
    explain: "CBT tập trung thay đổi nhận thức và hành vi ở hiện tại, không đi sâu vào vô thức như phân tâm học."
  },
  {
    q: "Một thân chủ luôn nghĩ 'tôi không làm được gì ra hồn', nhà trị liệu hành vi có thể sử dụng phương pháp nào?",
    opts: [
      "Sửa chữa nhận thức (cognitive restructuring)",
      "Kể lại giấc mơ",
      "Phân tích động cơ tiềm ẩn",
      "Đánh giá qua test vẽ người"
    ],
    ans: 0,
    explain: "Sửa chữa nhận thức giúp thân chủ nhận diện và thay đổi các suy nghĩ tiêu cực, phi lý."
  },
  {
    q: "Case: Một thân chủ nam có hành vi kiểm soát mạnh mẽ với bạn đời, song luôn cảm thấy lo sợ bị bỏ rơi. Theo phân tâm học, đây có thể liên quan đến xung đột ở giai đoạn nào?",
    opts: [
      "Giai đoạn môi miệng (oral stage)",
      "Giai đoạn hậu môn (anal stage)",
      "Giai đoạn cơ quan sinh dục (phallic stage)",
      "Giai đoạn tiềm ẩn"
    ],
    ans: 0,
    explain: "Xung đột gắn bó và sợ bị bỏ rơi có thể bắt nguồn từ những thiếu thốn/bất an trong giai đoạn môi miệng theo Freud."
  },
  {
    q: "Nhà trị liệu muốn đánh giá mức độ 'quan tâm xã hội' của một người, nên ưu tiên tìm hiểu qua phương pháp nào?",
    opts: [
      "Phỏng vấn về trải nghiệm hợp tác và cảm thông",
      "Test IQ",
      "Phân tích giấc mơ",
      "Đo độ nhạy cảm cảm giác"
    ],
    ans: 0,
    explain: "Quan tâm xã hội được đánh giá tốt nhất qua phỏng vấn các trải nghiệm hợp tác, hỗ trợ, cảm thông với người khác."
  },
  {
    q: "Case: Một thân chủ luôn có động lực học hỏi mạnh mẽ, không ngại thử thách, dễ cảm thấy 'flow' khi làm việc. Theo Maslow, thân chủ này có đặc điểm gì?",
    opts: [
      "Đạt tới nhu cầu tự trọng",
      "Hướng tới hiện thực hóa bản thân",
      "Đang ở mức nhu cầu an toàn",
      "Có phức cảm tự ti"
    ],
    ans: 1,
    explain: "Động lực học hỏi, cảm giác 'flow' và không ngừng phát triển là biểu hiện điển hình của nhu cầu hiện thực hóa bản thân."
  },
  {
    q: "Trong liệu pháp phân tích của Jung, thuật ngữ 'phức cảm' (complex) chỉ điều gì?",
    opts: [
      "Tập hợp các hành vi lặp lại",
      "Nhóm cảm xúc, suy nghĩ liên quan, chi phối hành vi cá nhân",
      "Các cơ chế phòng vệ",
      "Mục tiêu của bản ngã"
    ],
    ans: 1,
    explain: "Phức cảm là nhóm cảm xúc, ý nghĩ mạnh chi phối hành vi và ý thức, thường được hình thành trong vô thức cá nhân."
  },
  {
    q: "Một trong những mục tiêu của trị liệu thân chủ trọng tâm là gì?",
    opts: [
      "Giúp thân chủ đạt sự tự nhận thức và tự chấp nhận chính mình",
      "Tìm hiểu nguyên mẫu",
      "Giải thích động cơ tiềm ẩn",
      "Tăng sức mạnh bản ngã"
    ],
    ans: 0,
    explain: "Liệu pháp của Rogers hướng tới sự tự nhận thức, tự chấp nhận và phát triển tự do cá nhân."
  },
  {
    q: "Phương pháp nào sau đây là kỹ thuật đặc trưng của trị liệu phân tâm học?",
    opts: [
      "Tiếp xúc hệ thống",
      "Liên tưởng tự do",
      "Tạo lập hợp đồng trị liệu",
      "Đánh giá mức độ tự trị"
    ],
    ans: 1,
    explain: "Liên tưởng tự do là phương pháp then chốt để tiếp cận các xung năng và ký ức vô thức."
  },
  {
    q: "Trắc nghiệm TAT (Thematic Apperception Test) đánh giá điều gì?",
    opts: [
      "Chỉ số trí tuệ",
      "Động lực, xung năng, mối quan hệ chủ đạo của nhân cách",
      "Mức độ phức cảm",
      "Hành vi quan sát được"
    ],
    ans: 1,
    explain: "TAT giúp khám phá động lực, xung đột nội tâm qua các câu chuyện mà cá nhân tạo ra từ tranh vẽ."
  },
  // Các câu hỏi về ca lâm sàng và ứng dụng thực tế
  {
    q: "Hoàng, 30 tuổi, có vợ và 2 con, làm kế toán nhưng cảm thấy chán nản và muốn theo đuổi đam mê hội họa từ nhỏ. Theo Freud, xung đột nội tâm của Hoàng thể hiện rõ nhất ở mối quan hệ nào trong cấu trúc nhân cách?",
    opts: [
      "Giữa Id và Ego",
      "Giữa Ego và Superego",
      "Giữa Ego và thế giới thực",
      "Giữa Superego và Id"
    ],
    ans: 3,
    explain: "Hoàng bị giằng co giữa khao khát tự do (Id), thực tế trách nhiệm (Ego) và chuẩn mực xã hội, gia đình (Superego), dẫn đến xung đột nội tâm."
  },
  {
    q: "Trong tình huống Hoàng muốn nghỉ việc theo đuổi nghệ thuật nhưng sợ không lo được cho gia đình, trạng thái tâm lý nào là đặc trưng?",
    opts: [
      "Lo âu đạo đức",
      "Lo âu thực tế",
      "Lo âu thần kinh",
      "Thoái lui"
    ],
    ans: 0,
    explain: "Lo âu đạo đức phát sinh khi Ego bị kẹt giữa Id (mong muốn cá nhân) và Superego (chuẩn mực, trách nhiệm với gia đình)."
  },
  {
    q: "Một người mẹ vẫn bày cơm cho con trai đã mất, từ chối chấp nhận sự thật. Cơ chế phòng vệ nào của Freud được thể hiện rõ?",
    opts: [
      "Dồn nén",
      "Thoái lui",
      "Phủ nhận (denial)",
      "Phóng chiếu"
    ],
    ans: 2,
    explain: "Bà mẹ sử dụng phủ nhận – từ chối chấp nhận thực tế đau buồn – để giảm bớt lo âu."
  },
  {
    q: "Một người vợ khó chịu với sếp nhưng luôn nhẫn nhịn, về nhà lại thường xuyên bực bội với chồng con. Cơ chế phòng vệ nào đang hoạt động?",
    opts: [
      "Phóng chiếu",
      "Chuyển di (displacement)",
      "Hình thành phản ứng",
      "Dồn nén"
    ],
    ans: 1,
    explain: "Chuyển di là chuyển cảm xúc gây hấn từ đối tượng mạnh (sếp) sang đối tượng yếu hơn (gia đình)."
  },
  {
    q: "Một học sinh thường bị cha mẹ la mắng về điểm số, dần trở nên khép kín, tự đánh giá thấp bản thân. Theo Adler, biểu hiện tâm lý này có thể dẫn tới điều gì?",
    opts: [
      "Phức cảm tự ti",
      "Tăng động lực học",
      "Cảm thức cộng đồng mạnh",
      "Phong cách sống lạc quan"
    ],
    ans: 0,
    explain: "Phức cảm tự ti hình thành khi trẻ liên tục cảm thấy kém cỏi, bất lực và không được công nhận."
  },
  {
    q: "Minh, 30 tuổi, luôn trốn tránh giải quyết vấn đề vào phút chót, nghi ngờ người yêu và không thích kết bạn. Theo Adler, đặc điểm nào nổi bật nhất?",
    opts: [
      "Phong cách sống né tránh",
      "Ý thức tự do mạnh",
      "Hiện thực hóa bản thân",
      "Sự thống hợp bản ngã"
    ],
    ans: 0,
    explain: "Phong cách sống né tránh – tránh đối diện khó khăn, ít hợp tác xã hội – là vấn đề chính theo quan điểm của Adler."
  },
  {
    q: "Một thanh niên có hành vi bắt nạt bạn cùng lớp, nhưng thực ra thầm thích bạn đó. Freud giải thích đây là cơ chế phòng vệ nào?",
    opts: [
      "Dồn nén",
      "Hình thành phản ứng (reaction formation)",
      "Chuyển di",
      "Lý trí hóa"
    ],
    ans: 1,
    explain: "Hình thành phản ứng – thể hiện cảm xúc, hành vi trái ngược với cảm xúc thật bị dồn nén."
  },
  {
    q: "Case: Một người luôn sợ bị chỉ trích nên hay tự nhận lỗi trước để tránh bị nhắc nhở. Đây là biểu hiện của cơ chế phòng vệ nào?",
    opts: [
      "Thoái lui",
      "Phóng chiếu",
      "Hình thành phản ứng",
      "Dồn nén"
    ],
    ans: 2,
    explain: "Đây là hình thành phản ứng – thể hiện quá mức đặc điểm đối lập với cảm xúc thật để bảo vệ Ego."
  },
  {
    q: "Nam thường xuyên nhớ về tuổi thơ bị bố mẹ bỏ bê, hiện tại Nam luôn nghi ngờ tình cảm của bạn gái và khó tin tưởng người khác. Theo Erikson, Nam đã gặp vấn đề ở giai đoạn nào?",
    opts: [
      "Khởi xướng vs. Mặc cảm tội lỗi",
      "Tin tưởng vs. Mất lòng tin",
      "Gắn bó vs. Cô lập",
      "Tự trị vs. Xấu hổ/Nghi ngờ"
    ],
    ans: 1,
    explain: "Kinh nghiệm tuổi thơ thiếu gắn bó dẫn đến mất lòng tin, ảnh hưởng tới khả năng tin tưởng ở tuổi trưởng thành."
  },
  {
    q: "Một thanh niên thường xuyên đổi việc, không xác định được mục tiêu lâu dài. Erikson gọi đây là khủng hoảng ở giai đoạn nào?",
    opts: [
      "Khởi xướng vs. Mặc cảm tội lỗi",
      "Cảm nhận bản dạng vs. Bối rối bản dạng",
      "Tạo tác vs. Trì trệ",
      "Gắn bó vs. Cô lập"
    ],
    ans: 1,
    explain: "Vấn đề không xác định được bản thân, lạc lối, thuộc về giai đoạn bản dạng cá nhân (Identity vs. Role confusion) của Erikson."
  },
  {
    q: "Một học sinh đi học muộn và viện lý do bị kẹt xe, nhưng thực ra do dậy muộn. Đây là cơ chế phòng vệ nào?",
    opts: [
      "Dồn nén",
      "Lý trí hóa (rationalization)",
      "Phủ nhận",
      "Thoái lui"
    ],
    ans: 1,
    explain: "Lý trí hóa là bào chữa, viện cớ hợp lý cho một hành vi nhằm giảm cảm giác tội lỗi hoặc xấu hổ."
  },
  {
    q: "Một thân chủ kể: 'Tôi thấy mình rất vô dụng mỗi khi làm hỏng máy móc.' Theo Carl Rogers, điều gì xảy ra nếu trải nghiệm thực tế không hòa hợp với self-concept?",
    opts: [
      "Xuất hiện lo âu và phản ứng phòng vệ",
      "Tự tin tăng lên",
      "Ý chí mạnh mẽ hơn",
      "Hiện thực hóa bản thân tốt hơn"
    ],
    ans: 0,
    explain: "Theo Rogers, khi trải nghiệm và self-concept không hòa hợp sẽ gây ra lo âu và xuất hiện các phản ứng phòng vệ như bóp méo, phủ nhận."
  },
  {
    q: "Lan luôn cảm thấy áp lực khi không đạt được sự công nhận của người khác, tự so sánh bản thân với bạn bè trên mạng xã hội. Theo Maslow, nhu cầu nào của Lan chưa được thỏa mãn?",
    opts: [
      "Nhu cầu thuộc về",
      "Nhu cầu an toàn",
      "Nhu cầu tự trọng/tự tin",
      "Nhu cầu hiện thực hóa bản thân"
    ],
    ans: 2,
    explain: "Lan đang tìm kiếm sự công nhận, đánh giá cao từ người khác – đây là nhu cầu tự trọng/tự tin trong tháp Maslow."
  },
  {
    q: "Một sinh viên được khen ngợi khi học giỏi, nhưng bị phê bình khi học kém. Theo Rogers, loại quan tâm nào mà sinh viên này nhận được?",
    opts: [
      "Quan tâm tích cực vô điều kiện",
      "Quan tâm tích cực có điều kiện",
      "Chân thật",
      "Thấu cảm"
    ],
    ans: 1,
    explain: "Quan tâm tích cực có điều kiện là khi tình cảm, sự yêu quý chỉ đến khi cá nhân làm vừa lòng người khác."
  },
  {
    q: "Một thân chủ luôn cảm thấy không yên tâm về mối quan hệ, thường xuyên kiểm tra tin nhắn, gọi điện cho bạn đời. Theo học thuyết hành vi, hành vi này có thể do đâu?",
    opts: [
      "Củng cố tiêu cực",
      "Trừng phạt",
      "Củng cố tích cực (reinforcement)",
      "Điều kiện hóa cổ điển"
    ],
    ans: 2,
    explain: "Việc bạn đời trả lời tin nhắn/gọi điện giúp giảm lo âu, tạo ra củng cố tích cực cho hành vi kiểm tra liên tục."
  },
  {
    q: "Một thân chủ luôn kể lại những trải nghiệm thành công của mình quá mức, khoe khoang về bản thân nhưng dễ thất vọng khi bị phê bình. Theo Adler, đây là biểu hiện gì?",
    opts: [
      "Phức cảm tự tôn",
      "Phức cảm tự ti",
      "Phong cách sống lạc quan",
      "Cảm thức cộng đồng mạnh"
    ],
    ans: 0,
    explain: "Phức cảm tự tôn là khuynh hướng bù trừ quá mức cho tự ti bằng tự đề cao, khoe khoang thành tích cá nhân."
  },
  {
    q: "Một thân chủ lớn tuổi thường xuyên cảm thấy hối tiếc về những gì đã không làm được, hay nhắc lại quá khứ, đôi khi rơi vào trạng thái tuyệt vọng. Erikson gọi đây là khủng hoảng giai đoạn nào?",
    opts: [
      "Tin tưởng vs. Mất lòng tin",
      "Tạo tác vs. Trì trệ",
      "Trọn vẹn vs. Tuyệt vọng",
      "Gắn bó vs. Cô lập"
    ],
    ans: 2,
    explain: "Ở tuổi già, Erikson mô tả khủng hoảng là trọn vẹn vs. tuyệt vọng khi cá nhân nhìn lại cuộc đời."
  },
  {
    q: "Case: Một người thường 'diễn' vai mẫu mực trong môi trường công sở nhưng về nhà lại cảm thấy không phải là chính mình, dễ cáu gắt. Theo Jung, đây là biểu hiện của?",
    opts: [
      "Persona quá mạnh, xa rời bản chất thật",
      "Shadow được thống hợp",
      "Hòa hợp cá nhân",
      "Tự trị tối ưu"
    ],
    ans: 0,
    explain: "Persona là mặt nạ xã hội. Khi đồng nhất hóa quá mức với persona, cá nhân dễ xa rời cái tôi thật."
  },
  {
    q: "Một thiếu niên chuyển nhà nhiều lần, khó kết bạn và cảm thấy lạc lõng, không thuộc về đâu cả. Theo Maslow, điều gì chưa được thỏa mãn?",
    opts: [
      "Nhu cầu thể lý",
      "Nhu cầu thuộc về/yêu thương",
      "Nhu cầu thẩm mỹ",
      "Nhu cầu tự trọng"
    ],
    ans: 1,
    explain: "Nhu cầu thuộc về là nhu cầu được gắn bó, có nhóm, có cảm giác mình là một phần của tập thể, rất quan trọng với trẻ và thiếu niên."
  },
  {
    q: "Một thân chủ luôn lo sợ thất bại, dù trước đó từng thành công. Khi gặp thử thách mới lại chần chừ không dám thử sức. Theo học thuyết nhân cách nào, điều trị cần tập trung vào điều gì?",
    opts: [
      "Cảm giác tự ti và bù trừ của Adler",
      "Nhu cầu hiện thực hóa của Maslow",
      "Quan tâm tích cực vô điều kiện của Rogers",
      "Cơ chế phòng vệ của Freud"
    ],
    ans: 0,
    explain: "Adler cho rằng cảm giác tự ti và cách cá nhân bù trừ cho nó là trung tâm của trị liệu."
  }

];
