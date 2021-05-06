import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.css']
})
export class WhoAmIComponent implements OnInit {
  public dataGit:any;

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.getProfileGit();
  }

  public getProfileGit(){
    this.gitService.getApi().subscribe((data)=>{
      this.dataGit=data;
    });
  }
}