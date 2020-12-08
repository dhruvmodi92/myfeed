import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

const SAMPLE_RESPONSE = { "status": "SUCCESS", "userFeedDetails": [{ "userId": "23RMY", "subId": "12345", "docs": [{ "pd": "2020-09-22T05:49:31.000Z", "id": "42b4fae2-fc97-11ea-8b3b-ff748e7f50fc", "hl": "Computer Services IT Consulting: Sample BDD article.", "a": { "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, "co": [{ "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, { "id": "b9d90af9-e137-4c98-bab4-e1703e29e19a", "n": " Sheela Dias Jadhav" }], "dt": "application/pdf", "pv": "4", "pn": "Update", "pc": "6", "hi": {}, "vi": [{ "th": "/PublishedContent2/2020/05/26/ArticlePages/ARMALIK20200526140637/morganstanley.jpg?uuid=2c3faa62-b7c0-11ea-af6d-9e3126f8685b", "vu": "https://linkback.uat.morganstanley.com/web/sendlink/webapp/BMServlet?file=tc1f3gvg-3qlm-g002-9efb-0795b44a95d3&store=0&d=1&user=17kmfr0vwt8k-2&__gda__=1830315603_ffd84e9917c769a17abaf4eeeb9f0551#0011&17kmfr0vwt8k-1&1830315603_0ff2c9db1cec190fb1061938511254f8&0001&17kmfr0vwt8k-0&1830315603_fea2620f1257d27964bcb9d1b00fa250", "p": true }], "lang": "jpn", "cinfo": { "srcinfo": [{ "ticker": "6269.T" }], "ptcinfo": [{ "ticker": "6269.T" }], "ivcinfo": [{ "id": "1500000052", "industry": "Computer Services & IT Consulting" }, { "id": "1500005525", "industry": "Computer Services  IT Consulting", "ivc": "In-Line" }] }, "pst": "Video", "pstc": "Video", "pcat1": "Report" }, { "pd": "2020-09-22T05:48:13.000Z", "id": "077f7aba-fc97-11ea-8b3b-ff748e7f50fc", "hl": "Computer Services IT Consulting: Sample article for BDD - Please do not use.", "a": { "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, "co": [{ "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, { "id": "b9d90af9-e137-4c98-bab4-e1703e29e19a", "n": " Sheela Dias Jadhav" }], "dt": "application/pdf", "pv": "4", "pn": "Update", "pc": "6", "hi": {}, "vi": [{ "th": "/PublishedContent2/2020/05/26/ArticlePages/ARMALIK20200526140637/morganstanley.jpg?uuid=2c3faa62-b7c0-11ea-af6d-9e3126f8685b", "vu": "https://linkback.uat.morganstanley.com/web/sendlink/webapp/BMServlet?file=tc1f3gvg-3qlm-g002-9efb-0795b44a95d3&store=0&d=1&user=17kmfr0vwt8k-2&__gda__=1830315603_ffd84e9917c769a17abaf4eeeb9f0551#0011&17kmfr0vwt8k-1&1830315603_0ff2c9db1cec190fb1061938511254f8&0001&17kmfr0vwt8k-0&1830315603_fea2620f1257d27964bcb9d1b00fa250", "p": true }], "lang": "eng", "cinfo": { "ivcinfo": [{ "id": "1500000052", "industry": "Computer Services & IT Consulting" }, { "id": "1500005525", "industry": "Computer Services  IT Consulting", "ivc": "In-Line" }] }, "pst": "Video", "pstc": "Video", "pcat1": "Report" }, { "pd": "2020-09-22T05:46:35.000Z", "id": "dbf5cb56-fc96-11ea-8b3b-ff748e7f50fc", "hl": "Computer Services IT Consulting: Sample BDD article.", "a": { "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, "co": [{ "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, { "id": "b9d90af9-e137-4c98-bab4-e1703e29e19a", "n": " Sheela Dias Jadhav" }], "dt": "application/pdf", "pv": "4", "pn": "Update", "pc": "6", "hi": {}, "vi": [{ "th": "/PublishedContent2/2020/05/26/ArticlePages/ARMALIK20200526140637/morganstanley.jpg?uuid=2c3faa62-b7c0-11ea-af6d-9e3126f8685b", "vu": "https://linkback.uat.morganstanley.com/web/sendlink/webapp/BMServlet?file=tc1f3gvg-3qlm-g002-9efb-0795b44a95d3&store=0&d=1&user=17kmfr0vwt8k-2&__gda__=1830315603_ffd84e9917c769a17abaf4eeeb9f0551#0011&17kmfr0vwt8k-1&1830315603_0ff2c9db1cec190fb1061938511254f8&0001&17kmfr0vwt8k-0&1830315603_fea2620f1257d27964bcb9d1b00fa250", "p": true }], "lang": "jpn", "cinfo": { "srcinfo": [{ "ticker": "6269.T" }], "ptcinfo": [{ "ticker": "6269.T" }], "ivcinfo": [{ "id": "1500000052", "industry": "Computer Services & IT Consulting" }, { "id": "1500005525", "industry": "Computer Services  IT Consulting", "ivc": "In-Line" }] }, "pst": "Video", "pstc": "Video", "pcat1": "Report" }, { "pd": "2020-09-22T05:45:19.000Z", "id": "aae14acc-fc96-11ea-8b3b-ff748e7f50fc", "hl": "Computer Services IT Consulting: Sample article for BDD - Please do not use.", "a": { "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, "co": [{ "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, { "id": "b9d90af9-e137-4c98-bab4-e1703e29e19a", "n": " Sheela Dias Jadhav" }], "dt": "application/pdf", "pv": "4", "pn": "Update", "pc": "6", "hi": {}, "vi": [{ "th": "/PublishedContent2/2020/05/26/ArticlePages/ARMALIK20200526140637/morganstanley.jpg?uuid=2c3faa62-b7c0-11ea-af6d-9e3126f8685b", "vu": "https://linkback.uat.morganstanley.com/web/sendlink/webapp/BMServlet?file=tc1f3gvg-3qlm-g002-9efb-0795b44a95d3&store=0&d=1&user=17kmfr0vwt8k-2&__gda__=1830315603_ffd84e9917c769a17abaf4eeeb9f0551#0011&17kmfr0vwt8k-1&1830315603_0ff2c9db1cec190fb1061938511254f8&0001&17kmfr0vwt8k-0&1830315603_fea2620f1257d27964bcb9d1b00fa250", "p": true }], "lang": "eng", "cinfo": { "ivcinfo": [{ "id": "1500000052", "industry": "Computer Services & IT Consulting" }, { "id": "1500005525", "industry": "Computer Services  IT Consulting", "ivc": "In-Line" }] }, "pst": "Video", "pstc": "Video", "pcat1": "Report" }, { "pd": "2020-09-22T05:44:00.000Z", "id": "7ee7f34e-fc96-11ea-8b3b-ff748e7f50fc", "hl": "Computer Services IT Consulting: Test Article for BDD - Please do not use.", "a": { "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, "co": [{ "id": "554ad741-110d-4cad-91d5-e1703e29e19a", "n": " AshishKumar Malik" }, { "id": "b9d90af9-e137-4c98-bab4-e1703e29e19a", "n": " Sheela Dias Jadhav" }], "dt": "application/pdf", "pv": "4", "pn": "Insight", "pc": "6", "hi": {}, "au": [{ "th": "/PublishedContent2/2020/05/26/ArticlePages/ARMALIK20200526140637/morganstanley.jpg?uuid=2c3faa62-b7c0-11ea-af6d-9e3126f8685b", "aurl": "https://linkback.uat.morganstanley.com/web/sendlink/webapp/BMServlet?file=tb9ji7o0-3qlm-g002-9efb-0795b44a95d3&store=0&d=1&user=17kmfnckx1qb-2&__gda__=1830315601_5c60eddcf208c634204839c4fce58c3d#0011&17kmfnckx1qb-1&1830315601_b8a5473ba465d343e71a4f0d54d33144&0001&17kmfnckx1qb-0&1830315601_ffecf5bf29d158c88b11d73f7d9d2b1b", "p": true }], "lang": "jpn", "cinfo": { "srcinfo": [{ "ticker": "6269.T" }], "ptcinfo": [{ "ticker": "6269.T" }], "ivcinfo": [{ "id": "1500000052", "industry": "Computer Services & IT Consulting" }, { "id": "1500005525", "industry": "Computer Services  IT Consulting", "ivc": "In-Line" }] }, "pst": "Audio", "pstc": "Audio", "pcat1": "Report" }], "modifiedDate": 123456789 }] };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  feed: any;
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    /*this.feedService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.feed = data;
    }) */

    this.callFeedService();
    // this.feed = this.feedService.processFeedResponse(SAMPLE_RESPONSE);
  }

  callFeedService() {
    this.feedService.sendGetRequest().subscribe(
      (data: any) => {
        console.log(data);
        this.feed = this.feedService.processFeedResponse(data);
      },
      (error) => {
        console.log(error);
      })
  }

  openReport(item) {
    if (item && item.id) {
      let url = 'https://ny.matrix-uat.ms.com/eqr/article/webapp/' + item.id;
      window.open(url, '_blank');
    }
  }
}
