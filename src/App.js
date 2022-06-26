import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Poster from './Poster';
import Row from './Row.js';
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let data = [
  // My Watching List
  [
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWHAw8GRpjqx-WDNjkqz6CW4oUedkMSbBh10x6NTxwnolB7U5SEY4SzlnsRqAQKWkYidOlpxUo3359QKKJutzIYbl5aXhDu1KtpVBUkkyIZov4us9fREG9Ff1vqUbNcbjLK54oikGlA4dq_iWIR2iLw44NAZe2xc9SzTe6kPM7EwQXtQ1uMLhjHAeHwbFNI.jpg?r=033"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb1csV79314Bbf9OjP8PNuFnguRUdcUMhJiJ8Pw2rBS3HtxQwvHvdN1CBaypCPKgQtXFE0X328jMmyr4oKpsBLdnZh433rA8kNVOgkM27ETzXfvqwOhdBuy3RjoVSQ1CHZLE06emEQIKK7uMGEkVkiC8ieSjyDil8w9p1w.jpg?r=156"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRIsh0QxtPNdgWzSSw4BhFmu4Xznwbul8vuR8LWu_48Ngc0VRMoihOtLlTneZFFGce93AmfZZveT3VXyAgeUGyiPtWJXCRDJzZs5aICk_vA0f-xcZNo06oIQe-iFHaYc6y7X.jpg?r=7c1"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXxhZcgo4FF6c5B_FEf4Kc_sUr-rqArzz_Ovk7wYEplGfJR25kMraoCL94eN6uIy1sZRJa5DNbgQxrps0QUH8Jd2XIyCtYXYjGs6bTbRkHb_jYUXVRAyfzze53pyKb42lOIk.jpg?r=e85"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeDXgv9QeS4xcO4ETB0Ua1XCfDuk4qJGxG4X9rKn86h74h11YI5vZenVxqF0uD6SYLgKwHtM3go-MTTIkU0QOg7iS5chZ4fZ_bY.jpg?r=fbe"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTLPAnJfrowxL6NNFesiAFd4xWAzAwcfCmqrsOlJ2n52J15v6SgA_t6w4ybynduZCciHHQMKi-0VP4UBSEuE5eOFe6GJhUOiQNI.jpg?r=ced"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYyIu5HpRSrbvwX-PAjxKpCJcbG1SR5AjpfecMPfSGAkqO2Vq86OfKjdhn8GWWAhhLrG7WVSqJqo1zMFm_MoP_Y6XOZNMnlDK5o.jpg?r=65f"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXhAaKcOKy0PrvPOFUkus_IXFozM5PHS3WaQMHRtc94RR0myr4tLvDliHqTn6UgOFDmXImGHOWTZ2oyfd6goal86s6lUTjlNhs5_PWh_8eRc7lF9pizStP_wYcdIevOw5Zmn.jpg?r=562"
  ],
  //Popular on Netflix
  [
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSsHthV000VhbqQkCfpO25vEfoygAjfK2UqDxjsOY7R-TdaKoK4XjiVu1Rpz0I6VEinGPVDLZKbo1JKRMIakaB_TkD2dlGWqM8TlHLU1p28LggixRFjGGECsiKXepqNZMHd1rOjioP3sz6y1zVlARAIgu64e6mrs6S8.jpg?r=9d9"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQVLsr0a-bnFOd69ARS9qZw0-xeZzaaiNEZrGGp3cZzuoRbup4aqbTRru3x14fkF1spamjw9h5CoMsknUKsX_95JbZiCfLkx67U.jpg?r=82f"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQw8RjxQJ4PbHf_swCWsGtUkUn0znM643_ecRA5mioVcGKOOIqXrCXObMVIadyP4OvkKqpEIU1yQKp4PRvWfBL0LGatYYu26-s.jpg?r=780"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYyIu5HpRSrbvwX-PAjxKpCJcbG1SR5AjpfecMPfSGAkqO2Vq86OfKjdhn8GWWAhhLrG7WVSqJqo1zMFm_MoP_Y6XOZNMnlDK5o.jpg?r=65f"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSKgqT5EuYszIVkr9JrQFNTE2EYfPjCT-32VIykYX70C9tvOz0Cfo990t9BbPPjN4HuOmERHiAcqqL5iJ2UyUncQs52Tn-EcfP7usqLL5sISJd-xGos2vGlhtHw7w41aO8ba.jpg?r=e98"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRd9S8wGWcv9WRxZRlmGL6Pqmi0uCM4B3VUVEFGJojf446Aye1H7xoM2N0IN2aWOAwsbh4Z4KmzBGuuRrODmbCQdOMdAAhwPD5FUINSg0zd-vzaigxxg00T4q38YAjhOm16vWH4sa-elAjTXwAzExz8x9V3Q2pIcRpE.jpg?r=723"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR_tYZ_GZU0W7-GIvChR5-s-eiVMnZtop9mFkbLltEfbBX-AclFZpR2fHaJ_G9DILiI1DLBFKtCMofVKo0apKOGxz8Jv9-cmBRmXiH6Q3jUZnN_IYEOhwJs75OLddtsNcwMt.jpg?r=a1f"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYdfUlBvwOq8man9L61DWb8MCZjQpnDjL0DzJ3UPkjk8fUTFu7884_zasTq5XoaZFtNatGPPmvGSKm2J499mL5UTyqa-tyPF0iTi2k4YLzm2YR--TyLyKti6u56arPogGRH8.jpg?r=127"

  ],
  //Hindi Movies & TV
  [
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABef_MW_MnKAp0HsqiT6b184JiCG1u_AaeHf7SCRDPNCQ0ztry-6OolZVkUx4PkWtRZVFg0IJVjnbONxKKtertyDG87SQ_GDa0QofCQLcuNuh-mmHpJU5XK8cZxlS9O93-gYvAA0CsDQGhx1nW89snwOBCQaAccEj97I.jpg?r=520"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWYXEbALqO9wEVRFQWeL06-ap4sfYinORTdr0BPvQsBkdxR7EbBrpTAjSusotmCua5jgXB7XTqfKToXGjAktWRSMlWwijepI0dc.jpg?r=902"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcIa16v2EyqJDCZGaqYbag-VjZ0FzQqnd6UAKqBUr3-UzQwh6ByXI9rjjXk75tLH06wSah4FcdykZRQMUANL7VQzQ7M8-wxflrs.jpg?r=dbd"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRQEC4NS7lMPzJ0EfbtGjEFGXQ0hs5LtVHQIvirzrtpXuwEj9OpwvgDziqRlQQSbHSRrGZfBn2JVI0Warp5_KPUJnDpG3TGEwjM.jpg?r=ce0"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVcMQX9VOEcmJUdeslpObDg1ohpF5wzKEGtO_KDgBFTlglT7nFrOcoEppyLIOqjkelkpI5OfoimaLarBuRo83KPmwb5cyfDu0BROjXoOTW6RzYTQFbRLMIE_yje8f6LUmTkN.jpg?r=8a3"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABewiarEIMtYFBPrvveYb7EZUbmA1vkR6yM3oz8Ei-hf5dxmMRulcAT_x4tBvH14TfKMGLG41jE9Az1RHvzhQOUHFLDQ2xEcJFyHZmwwzNUUdYWeAVuc6C0Zu5YZexHXH13za.jpg?r=0ee"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVmcLCLOxdgNpsEcj_osd-6ZiIww6clp7yUBigu1yZDYPUfEzp8_ogtvI0IyfFI4QSiW1rj5Jl75rIxKpIqyYaxMtSfq-gAv8w0.jpg?r=59e"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUhdJA2UBGxWZH4V9Jgr3lgUKSml1O-3vRu-LZDpguXpE-OfLpeVe2Ni5dIMeRP7ebEk-5NnJqVZLpkm-ba9pjP_thW3cbW4SWM.jpg?r=672"
  ],
  //Bingeworthy TV Dramas
  [
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABavWO8jQmMdCo3q3FGtX6BCPT2K3oT1H5hqsFVHEgwth7gdlGl5cXReeYoT4Vq4jWnjN5N6Fy9FmRg3oe3fqUh-db8QoDbD8Dok.jpg?r=8ba"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbfUkaMdwfd2qanvsZ-Dx68r6o-zV61w0JUeGoRtc8B_KGwrdtMWtTnHGOldsD-Co-hLd132WFwmX7IghZMZLKs2c2YlZYilaS2L6WR5i46fCo18174SE3nt0hl1mOjJTnp4.jpg?r=bab"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaT4ebA3XqTz_yjpV_wiwQ-q66968z9MmjV4EZJmqtY-UyaWWrbli4o2OjdDsQniACKXsc078hKVKppUhnYc2B7szlyzOZwKbBIFHK69ljIrBxf3SkdJ2eLJwWydwRcivOjq.jpg?r=f45"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc3jAsDzaxQJ1zjnjbCTorbhIB4boljJf33DQwUbUnKk7SYX6eWzyHE_ZYIL7LUcvF7ivTJsiSVjLF1BnJffFG_FqrTV20rSD4Y.jpg?r=008"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRuK6PMCMSVAeFkOgRlrhSiAKHDJnKBAHrA8WIiNN8uGKAMMO3wWYVVPx-e3ps5GU1XyvynRhZR5Eyi2bB_1LKA_BeyOk7ADIOSf8fhlBvWr_IMsXhLQmw9fSzcYcgT4GcmY.jpg?r=973"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa4zkUaV7XUEVxDRuQ6i_Ib392gYM_AL1N85XWyhQYJmkeWcDxtiQWeqFU-oEm6woVHghYqvtQE9ULjRnsEv9GLsBZkf3sTrl1a9Sqsnlaeq4SsR1rFCHc8OTCXPgo3WI65I.jpg?r=e33"
    ,"https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaLdCBCEcSoTfgZ7HoSJ3oF_ztu5fU-thYrtlqLAFCOCb1EGweKraYoVeitN4Q5WXEJGQ8KGYZvU5V0L0Uxhj50w0L4t-cYRYo8.jpg?r=604"
  ]
];

  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<><Navbar login={false}/><Login /></>}/>
      <Route path="/home" element={
          <>
          <Navbar login={true} user="akash"/>
          <Poster/>
          <Row title="My Watching List" list = {data[0]}/>
          <Row title="Popular on Netflix" list = {data[1]}/>
          <Row title="Hindi Movies & TV" list = {data[2]}/>
          <Row title="Bingeworthy TV Dramas" list = {data[3]}/>
          </>
        }/>
      <Route path="/guest" element={
          <>
          <Navbar login={true} user="guest"/>
          <Poster/>
          <Row title="My Watching List" list = {data[0]}/>
          <Row title="Popular on Netflix" list = {data[1]}/>
          <Row title="Hindi Movies & TV" list = {data[2]}/>
          <Row title="Bingeworthy TV Dramas" list = {data[3]}/>
          </>
        }/>
      <Route path="/kids" element={
          <>
          <Navbar login={true} user="kids"/>
          <Poster/>
          <Row title="My Watching List" list = {data[0]}/>
          <Row title="Popular on Netflix" list = {data[1]}/>
          <Row title="Hindi Movies & TV" list = {data[2]}/>
          <Row title="Bingeworthy TV Dramas" list = {data[3]}/>
          </>
        }/>
      <Route path='*' element={<><Navbar login={false}/><Login /></>}/>

    </Routes>
</BrowserRouter>
  );
}

export default App;
