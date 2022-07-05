using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebThietBi.Data
{
    public class Comment
    {
        private string id;
        private string tenKhach;
        private DateTime ngayReview;
        private int rate;
        private string cmt;

        public string Id { get => id; set => id = value; }
        public string TenKhach { get => tenKhach; set => tenKhach = value; }
        public DateTime NgayReview { get => ngayReview; set => ngayReview = value; }
        public int Rate { get => rate; set => rate = value; }
        public string Cmt { get => cmt; set => cmt = value; }
    }
}