import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ticket} from '../../model/Ticket';
import { TicketBDService } from "../../services/TicketBD.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent implements OnInit {

  historyTickets: Ticket[];
  id : string;

  constructor(
    private route: ActivatedRoute, private HistoryTicketService: TicketBDService) { }

  ngOnInit() {
    this.getHero();
  }


  getHero(): void {
    this.HistoryTicketService.getTicketHistory().subscribe(historyTickets => {
      this.historyTickets = historyTickets.payload;
      //console.log(this.historyTickets);
    });
  }

  getTicketById(id): void{
  
  this.HistoryTicketService.getTicket(this.id).subscribe(res =>{
    this.historyTickets = res.payload;
        if(res.status == 'SUCCESS'){
            Swal.fire({
              type: 'success',
              title: 'Good',
              text: 'El usuario fue creado con exito!'
            })
        }else{
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'No se procesó tu solicitud: \n' + res.errorMessage
            })
        }
  });
}

}


















